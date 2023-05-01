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
    console.log("\n")
}

// This is used to generate arrays to give the user options to pick from
const createArray = async function(query) {
    const db = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.PASSWORD,
        database: "employee_db"
    });

    const results = await db.query(query);
    const newResults = results[0];
    // debug
    console.log(newResults);

    let array = [];

    for (let i = 0; i < newResults.length; i++) {
        array.push(`${Object.values(newResults[i])}`);
    }

    return array;
}

const getID = async function(tableName, columnName, entry) {
    const db = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.PASSWORD,
        database: "employee_db"
    });

    const result = await db.query(`SELECT id FROM ${tableName} WHERE ${columnName} = "${entry}"`);
    const rowID = Number(Object.values(result[0][0]));
    return rowID;
}

// debug
const tester = function() {
    let newID = getID("role", "title", "dep one manager");
    console.log(newID);
}
tester();

module.exports = { createTable, createArray, getID };