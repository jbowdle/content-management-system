INSERT INTO department (name)
VALUES ("Sales"),
    ("Finance"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Head Salesperson", 90000, 1),
    ("Salesperson", 80000, 1),
    ("Head Accountant", 90000, 2),
    ("Accountant", 80000, 2),
    ("Lead Lawyer", 90000, 3),
    ("Laywer", 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("George", "Washington", 1, null),
    ("Henry", "Hoover", 2, 1),
    ("Phillip", "Jones", 2, 1),
    ("Michelle", "Carpenter", 3, null),
    ("Jimmy", "Johns", 4, 4),
    ("Timmy", "Turner", 4, 4),
    ("Jimbo", "Jim", 5, null),
    ("Patrick", "Star", 6, 7),
    ("Margaret", "Thatcher", 6, 7);