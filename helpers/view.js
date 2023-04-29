const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_db"
});

// refactor to display in table format rather than json
const viewEmployees = function () {
    db.query("SELECT * FROM employee", function (err, results) {
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
}

module.exports = { viewEmployees };