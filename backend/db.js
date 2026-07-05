const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.hayabusa.proxy.rlwy.net,
    user: process.env.root,
    password: process.env.CUSXfqIlUexjCrIeaRyYpnFyaUystjUD,
    database: process.env.railway,
    port: process.env41392
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