const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const hash = require("bcryptjs");

const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "3141",
    database: "cinema_test"
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    const roles = db.query("SELECT * FROM user;", (err, result) => {
        if (err) throw err
        res.send(result);
    })  
})

app.get('/api/auth/signup', (req, res) => {
    const fullName = "Yeabsra Hailu"
    const email = "yeab@gmail.com"
    const password = hash.hashSync("yeabu@123", 8)

    db.query("INSERT INTO user (Fullname, Email, Password) VALUES (?, ?, ?);", 
        [fullName, email, password], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

const PORT = process.env.PORT || 8080;
const listener = app.listen(PORT, () => {
    console.log(`App server started at http://localhost:${PORT}`);
})