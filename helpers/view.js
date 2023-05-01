const mysql = require("mysql2");
const { createTable } = require("./utility");

require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_db"
});

// refactor to display in table format rather than json
const viewEmployees = function () {
    const query = `SELECT
    e.id AS id,
    CONCAT(e.last_name, ', ', e.first_name) AS name,
    role.title AS title,
    department.name AS department,
    role.salary AS salary,
    CONCAT(m.last_name, ', ', m.first_name) AS manager
FROM department
JOIN role ON department.id = role.department_id
JOIN employee e ON role.id = e.role_id
LEFT OUTER JOIN employee m ON e.manager_id = m.id
ORDER BY e.id;`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }

        createTable(results);
    });
}

const viewRoles = function () {
    const query = `SELECT
    role.id AS id,
    role.title AS title,
    role.salary AS salary,
    department.name AS department
FROM role
JOIN department ON role.department_id = department.id
ORDER BY role.id;`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }

        createTable(results);
    });
}

const viewDepartments = function () {
    const query = `SELECT department.id AS id, department.name AS department FROM department;`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }

        createTable(results);
    });
}

module.exports = { viewEmployees, viewRoles, viewDepartments };