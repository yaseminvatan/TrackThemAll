
INSERT INTO department (name) VALUES
('Engineering'),
('Human Resources'),
('Finance'),
('Marketing');

INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 70000, 1),
('HR Specialist', 60000, 2),
('Accountant', 65000, 3),
('Marketing Manager', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, NULL),
('Alice', 'Johnson', 3, NULL),
('Bob', 'Williams', 4, NULL),
('Charlie', 'Brown', 1, 1); 

