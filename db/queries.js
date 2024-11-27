const pool = require('./connection');

// View all roles
const getRoles = async () => {
  const res = await pool.query(`
    SELECT role.id, role.title, role.salary, department.name AS department
    FROM role
    JOIN department ON role.department_id = department.id
  `);
  return res.rows;
};

// Add a new role
const addRole = async (title, salary, department_id) => {
  await pool.query(
    "INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)",
    [title, salary, department_id]
  );
};

// View all employees
const getAllEmployees = async () => {
  const res = await pool.query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, employee.manager_id
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
  `);
  return res.rows;
};

// Add a new employee
const addEmployee = async (first_name, last_name, role_id, manager_id) => {
  await pool.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)",
    [first_name, last_name, role_id, manager_id]
  );
};

// Update employee role
const updateEmployeeRole = async (employee_id, role_id) => {
  await pool.query(
    "UPDATE employee SET role_id = $1 WHERE id = $2",
    [role_id, employee_id]
  );
};

module.exports = {
  getDepartments,
  addDepartment,
  getRoles,
  addRole,
  getAllEmployees,
  addEmployee,
  updateEmployeeRole,
};
