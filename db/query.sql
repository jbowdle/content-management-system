
-- example shoing employees, their title, and their salary
SELECT
employee.id AS id,
employee.first_name AS first_name,
employee.last_name AS last_name,
role.title AS title,
role.salary AS salary
FROM employee
JOIN role ON employee.role_id = role.id
ORDER BY employee.id;