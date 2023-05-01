
-- example shoing employees, their title, and their salary
-- SELECT
-- employee.id AS id,
-- employee.first_name AS first_name,
-- employee.last_name AS last_name,
-- role.title AS title,
-- role.salary AS salary
-- FROM employee
-- JOIN role ON employee.role_id = role.id
-- ORDER BY employee.id;

-- SELECT
--     e.id AS id,
--     CONCAT(e.last_name, ', ', e.first_name) AS name,
--     role.title AS title,
--     department.name AS department,
--     role.salary AS salary,
--     CONCAT(m.last_name, ', ', m.first_name) AS manager
-- FROM department
-- JOIN role ON department.id = role.department_id
-- JOIN employee e ON role.id = e.role_id
-- LEFT OUTER JOIN employee m ON e.manager_id = m.id
-- ORDER BY e.id;

SELECT
    role.id AS id,
    role.title AS title,
    role.salary AS salary,
    department.name AS department
FROM role
JOIN department ON role.department_id = department.id
ORDER BY role.id;

SELECT department.id AS id, department.name AS department FROM department;