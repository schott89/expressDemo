const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug');

const usersRouter = require("./routes/users");


app.use('/user', usersRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use((req, res, next) => {
    res.status(404).send("404...Sorry can't find that!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})