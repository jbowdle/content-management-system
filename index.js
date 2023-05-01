const inquirer = require("inquirer");
const { viewEmployees, viewRoles, viewDepartments } = require("./helpers/view");

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
                    runMenu();
                    break;
                case "View all employees by department":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "View all employees by manager":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "Add employee":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "Update employee role":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "Update employee manager":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "View all roles":
                    viewRoles();
                    runMenu();
                    break;
                case "Add role":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "Remove role":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "View all departments":
                    viewDepartments();
                    runMenu();
                    break;
                case "Add department":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "Remove department":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "View total utilized budget by department":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
                case "Quit":
                    // placeholder
                    console.log(`You chose: ${response.menu}. This option has not been implemented yet.`);
                    runMenu();
                    break;
            }
        });
}

runMenu();