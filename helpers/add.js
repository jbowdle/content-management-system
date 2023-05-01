const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_db"
});

const addEmployee = function(firstName, lastName, roleID, managerID) {
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", ${roleID}, ${managerID})`);

    console.log("Employee added.");
}

const addRole = function(title, salary, departmentID) {
    db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${title}", ${salary}, ${departmentID})`);

    console.log("Role added.");
}

const addDepartment = function(departmentName) {
    db.query(`INSERT INTO department (name) VALUES ("${departmentName}")`);

    console.log("Department added.");
}

module.exports = { addEmployee, addRole, addDepartment };