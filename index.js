const inquirer = require("inquirer");
const { viewEmployees, viewRoles, viewDepartments } = require("./helpers/view");
const { createRoleArray, createManagerArray } = require("./helpers/utility");
const { addEmployee } = require("./helpers/add");

const runMenu = async function() {
    let rolesArray = await createRoleArray();
    let managerArray = await createManagerArray();

    inquirer
        .prompt([
            {
                // main menu
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
            },
            {
                type: "input",
                name: "employeeFirst",
                message: "What is the employee's first name?",
                when: (answers) => {
                    if (answers.menu === "Add employee") {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "employeeLast",
                message: "What is the employee's last name?",
                when: (answers) => {
                    if (answers.menu === "Add employee") {
                        return true;
                    }
                }
            },
            {
                type: "list",
                name: "employeeRole",
                message: "What is the employee's role?",
                choices: rolesArray,
                when: (answers) => {
                    if (answers.menu === "Add employee") {
                        return true;
                    }
                }
            },
            {
                type: "list",
                name: "employeeManager",
                message: "Who is the employee's manager?",
                choices: managerArray,
                when: (answers) => {
                    if (answers.menu === "Add employee") {
                        return true;
                    }
                }
            },
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
                    addEmployee(response.employeeFirst, response.employeeLast, response.employeeRole, response.employeeManager);
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
                    console.log("Exiting program");
                    process.exit();
            }
        });
}

runMenu();