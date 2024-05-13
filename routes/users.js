var express = require('express');
var router = express.Router();
var db = require('../db');

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    //jump to next middleware function
    next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/:id', async function (req, res, next) {
    // if the user ID is 0, redirect to 404 error page
    if (req.params.id == 0) {
        next();
    } else {
        //following code may be excluded in some kind of UserController.js...
        var data = await getUser(req.params.id);
        console.log("Userdata:");
        console.log(data.length);
        if (!data.length) {
            next();
        } else {
            res.render('showUser', {title: 'Hey', message: 'Here is User ' + data[0].firstname});
        }
    }
});

router.get('/', function (req, res, next) {

    //following code may be excluded in some kind of UserController.js...
    //  var data = await getAllUsers();

    res.render('showAllUsers', {title: 'All Users'});
});

async function getUser(userId) {
    const data = await db.query(
        'SELECT * FROM USER WHERE ID = ?', [userId]
    );
    return data
}

module.exports = router;