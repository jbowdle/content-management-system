# Content Management System

## Description
This is a content management system set up to handle an employee database. It can store employees along with their roles, salaries, departments, and managers. This data can be edited by the user.

## Installation and Usage
Navigate to the root file folder then run the following code to install dependencies:
```
npm i
```

After installing dependencies, create a .env file in the root directory and input your password:
```
PASSWORD=(insert your password here)
```

To setup an example database, run:
```
mysql -u root -p
(enter password)
SOURCE db/schema.sql;
SOURCE db/seeds.sql;
```

Once the above steps are completed, run:
```
node index.js
```
This will start the program in the command line.

## Functionality:
The following features are currently functional:
* View all employees
* Add employee
* Update employee role
* View all roles
* Add role
* View all departments
* Add department
* Quit

The following features are NON-functional and will be implemented at a later date:
* View all employees by department
* View all employees by manager
* Remove employee
* Update employee manager
* Remove role
* Remove department
* View total utilized budget by department

## Walkthrough Video
(Walkthrough Video)[https://drive.google.com/file/d/1c47tt9RXgUHpULx0LAFE8e87rC9XRZPQ/view]