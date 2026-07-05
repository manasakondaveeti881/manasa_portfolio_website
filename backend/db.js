const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "hayabusa.proxy.rlwy.net",
    user: "root",
    password: "bEONIZzCpgdiJrnuxwdWShypyoHYZviq",
    database: "railway",
    port: 57566
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed");
        console.log(err);
    } else {
        console.log("Connected to Railway MySQL");
    }
});

module.exports = connection;