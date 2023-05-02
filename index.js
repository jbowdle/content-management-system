const inquirer = require("inquirer");
const { viewEmployees, viewRoles, viewDepartments } = require("./helpers/view");
const { createArray, getID } = require("./helpers/utility");
const { addEmployee, addRole, addDepartment } = require("./helpers/add");
const { updateEmployeeRole } = require("./helpers/update");

const runMenu = async function() {
    // These arrays are used for question choices
    let rolesArray = await createArray("SELECT title FROM role;");
    let departmentArray = await createArray("SELECT name FROM department;");
    let employeeArray = await createArray("SELECT last_name FROM employee;");

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
            // Next four questions trigger when user chooses "add employee"
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
                choices: employeeArray,
                when: (answers) => {
                    if (answers.menu === "Add employee") {
                        return true;
                    }
                }
            },
            // Next three questions trigger when user chooses "add role"
            {
                type: "input",
                name: "roleTitle",
                message: "What is the name of the role?",
                when: (answers) => {
                    if (answers.menu === "Add role") {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "roleSalary",
                message: "What is the role's salary?",
                when: (answers) => {
                    if (answers.menu === "Add role") {
                        return true;
                    }
                }
            },
            {
                type: "list",
                name: "roleDepartment",
                message: "What is the role's department?",
                choices: departmentArray,
                when: (answers) => {
                    if (answers.menu === "Add role") {
                        return true;
                    }
                }
            },
            // This question triggers when user chooses "add department"
            {
                type: "input",
                name: "departmentName",
                message: "What is the name of the department?",
                when: (answers) => {
                    if (answers.menu === "Add department") {
                        return true;
                    }
                }
            },
            // Next two questions trigger when user chooses "update employee role"
            {
                type: "list",
                name: "updateEmployee",
                message: "Which employee will be updated?",
                choices: employeeArray,
                when: (answers) => {
                    if (answers.menu === "Update employee role") {
                        return true;
                    }
                }
            },
            {
                type: "list",
                name: "updateRole",
                message: "What will the new role be?",
                choices: rolesArray,
                when: (answers) => {
                    if (answers.menu === "Update employee role") {
                        return true;
                    }
                }
            },
        ])
        .then(async function(response) {
            // This giant switch statement will trigger helper functions depending on
            // the user's choice. The helper functions execute mysql2 queries.
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
                    let roleID = await getID("role", "title", response.employeeRole);
                    let managerID = await getID("employee", "last_name", response.employeeManager);
                    addEmployee(response.employeeFirst, response.employeeLast, roleID, managerID);
                    runMenu();
                    break;
                case "Update employee role":
                    let employeeID =  await getID("employee", "last_name", response.updateEmployee);
                    let newRoleID = await getID("role", "title", response.updateRole);
                    updateEmployeeRole(employeeID, newRoleID);
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
                    let departmentID = await getID("department", "name", response.roleDepartment);
                    addRole(response.roleTitle, response.roleSalary, departmentID);
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
                    addDepartment(response.departmentName);
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