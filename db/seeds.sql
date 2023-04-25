INSERT INTO department (name)
VALUES ("dep one"),
    ("dep two"),
    ("dep three");

INSERT INTO role (title, salary, department_id)
VALUES ("dep one manager", 1000, 1),
    ("dep one role two", 15, 1),
    ("dep one role three", 5, 1),
    ("dep two manager", 1000, 2),
    ("dep two role two", 10, 2),
    ("dep two role three", 70, 2),
    ("dep three manager", 1000, 3),
    ("dep three role two", 5, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("bob", "jones", 1, null),
    ("greg", "philips", 2, 1),
    ("jones", "philips", 3, 1),
    ("sue", "catherine", 4, null),
    ("jonny", "jim", 5, 4),
    ("timmy", "turner", 6, 4),
    ("jimbo", "jim", 7, null),
    ("meg", "tim", 8, 7);