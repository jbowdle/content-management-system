const inquirer = require("inquirer");
const { viewEmployees } = require("./helpers/view");

const runMenu = function() {
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
            switch (response.menu) {
                case "View all employees":
                    viewEmployees();

                    // menu doesn't reappear until user presses down arrow
                    runMenu();
                    break;
                default:
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
            }
        });
}

runMenu();