const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_db"
});

const updateEmployeeRole = function(employeeID, roleID) {
    db.query(`UPDATE employee SET role_id = ${roleID} WHERE id = ${employeeID}`);

    console.log("Employee role updated.");
}

module.exports = { updateEmployeeRole };