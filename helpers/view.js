const mysql = require("mysql2");
// https://www.npmjs.com/package/cliui
const ui = require("cliui")();

require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_db"
});

// Creates a table to view employees
const viewEmployees = function () {
    db.query("SELECT * FROM employee", function (err, results) {
        if (err) {
            console.log(err);
        }

        const createItem = function(text) {
           return {
                text: `${text}`,
                width: 15,
                align: "right",
                padding: [0, 1, 0, 1],
            }
        }

        // Adds headers to the table
        let headerStorage = [];
        for (let i = 0; i < Object.keys(results[0]).length; i++) {
            const headerArray = Object.keys(results[0]);
            const newHeader = createItem(headerArray[i]);
            headerStorage.push(newHeader);
        }
        ui.div(...headerStorage);
        
        // iterates through all the results and adds each as a new row
        for (let i = 0; i < results.length; i++) {
            let rowStorage = [];

            for (let j = 0; j < Object.keys(results[i]).length; j++) {
                const values = Object.values(results[i]);
                const newRow = createItem(values[j]);
                rowStorage.push(newRow);
            }

            ui.div(...rowStorage);
        }

        console.log("\n");
        // Displays the created table to the console
        console.log(ui.toString());
    });
}

module.exports = { viewEmployees };