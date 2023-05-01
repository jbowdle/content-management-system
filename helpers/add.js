const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_db"
});

const addEmployee = function(firstName, lastName, roleID, managerID) {
    const params = `${firstName}, ${lastName}, ${roleID}, ${managerID}`;
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", ${roleID}, ${managerID})`);

    console.log("Employee added.");
}

module.exports = { addEmployee };