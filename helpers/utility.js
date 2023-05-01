const mysql = require("mysql2/promise");
// https://www.npmjs.com/package/cli-table3
const Table = require("cli-table3");

require("dotenv").config();

const createTable = function(data) {
    // Headers are taken from the keys of the first result
    let headerArray = Object.keys(data[0]);

    // creates a table using cli-table3
    let table = new Table({
        head: headerArray,
        colWidths: [30, 30]
    });

    // creates a new row in the table for each result
    for (let i = 0; i < data.length; i++) {
        table.push(Object.values(data[i]));
    }

    console.log("\n");
    // prints out the table to cli
    console.log(table.toString());
    console.log("\n \n \n \n \n \n \n \n \n")
}

const getResults = async function(query) {
    const db = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.PASSWORD,
        database: "employee_db"
    });

    return db.query(query);
}

const createRoleArray = async function() {
    const results = await getResults("SELECT id FROM role;");
    const newResults = results[0];

    let roleArray = [];

    for (let i = 0; i < newResults.length; i++) {
        roleArray.push(`${Object.values(newResults[i])}`);
    }

    return roleArray;
}

const createManagerArray = async function() {
    const results = await getResults("SELECT id FROM employee WHERE manager_id IS NULL;");
    const newResults = results[0];

    let roleArray = [];

    for (let i = 0; i < newResults.length; i++) {
        roleArray.push(`${Object.values(newResults[i])}`);
    }

    return roleArray;
}

const createDepartmentArray = async function() {
    const results = await getResults("SELECT id FROM department;");
    const newResults = results[0];

    let roleArray = [];

    for (let i = 0; i < newResults.length; i++) {
        roleArray.push(`${Object.values(newResults[i])}`);
    }

    return roleArray;
}

const createEmployeeArray = async function() {
    const results = await getResults("SELECT id FROM employee;");
    const newResults = results[0];

    let roleArray = [];

    for (let i = 0; i < newResults.length; i++) {
        roleArray.push(`${Object.values(newResults[i])}`);
    }

    return roleArray;
}

module.exports = { createTable, createRoleArray, createManagerArray, createDepartmentArray, createEmployeeArray };