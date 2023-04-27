// REMINDER: use .env to hide mysql password
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all employees by department",
                "View all employees by manager",
                "Add employee",
                "Remove employee",
                "Update employee role",
                "Update employee manager",
                "View all roles",
                "Add role",
                "Remove role",
                "View all departments",
                "Add department",
                "Remove department",
                "View total utilized budget by department",
                "Quit"
            ]

        }
    ])
    .then((response) => {
        // placeholder
        console.log(`You chose: ${response.menu}`);
    });