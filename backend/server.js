const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Manasa's Portfolio Backend!");
});

// Get all projects
app.get("/projects", (req, res) => {

    db.query("SELECT * FROM projects", (err, results) => {

        if (err) {
            return res.status(500).send(err);
        }

        res.json(results);

    });

});
app.get("/test-db", (req, res) => {

    db.query("SELECT DATABASE() AS db", (err, dbResult) => {

        if (err) return res.json(err);

        db.query("SHOW CREATE TABLE contacts", (err2, tableResult) => {

            if (err2) return res.json(err2);

            res.json({
                database: dbResult,
                table: tableResult
            });

        });

    });

});
app.get("/check-contacts", (req, res) => {
    db.query("SHOW CREATE TABLE contacts", (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});
app.get("/all-contacts", (req, res) => {
    db.query("SELECT * FROM contacts", (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});
// Save contact message
app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    const sql = "INSERT INTO contacts (name, email,message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        res.send("Message sent successfully!");

    });

});

// Keep app.listen LAST
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});