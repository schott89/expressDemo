const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "localhost",
        user: "root",
        password: "",
        database: "expresstest",
        connectTimeout: 5000
    },
};
module.exports = config;