// https://www.npmjs.com/package/cli-table3
const Table = require("cli-table3");

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

module.exports = { createTable };