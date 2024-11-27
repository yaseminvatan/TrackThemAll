const inquirer = require('inquirer');
const db = require("./db/queries.js");

const menu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'Add a department',
        'View all roles',
        'Add a role',
        'View all employees',
        'Add an employee',
        'Update employee role',
        'Exit'
      ]
    }
  ]);

  switch (action) {
    case 'View all departments':
      const departments = await db.getDepartments();
      console.table(departments);
      break;

    case 'Add a department':
      const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter Department name:',
      });
      await db.addDepartment(name);
      console.log(`Department ${name} added!`);
      break;

    case 'View all roles':
      const roles = await db.getRoles();
      console.table(roles);
      break;

    case 'Add a role':
      const roleDetails = await inquirer.prompt([
        { type: 'input', name: 'title', message: 'Enter Role title:' },
        { type: 'input', name: 'salary', message: 'Enter Role salary:' },
        { type: 'input', name: 'department_id', message: 'Enter Department ID:' },
      ]);
      await db.addRole(roleDetails.title, roleDetails.salary, roleDetails.department_id);
      console.log(`Role ${roleDetails.title} added!`);
      break;

    case 'View all employees':
      const employees = await db.getAllEmployees();
      console.table(employees);
      break;

    case 'Add an employee':
      const employeeDetails = await inquirer.prompt([
        { type: 'input', name: 'first_name', message: 'Enter First Name:' },
        { type: 'input', name: 'last_name', message: 'Enter Last Name:' },
        { type: 'input', name: 'role_id', message: 'Enter Role ID:' },
        { type: 'input', name: 'manager_id', message: 'Enter Manager ID (or leave blank):', default: null },
      ]);
        // Ensure manager_id is either an integer or null
        const managerId = employeeDetails.manager_id === '' ? null : employeeDetails.manager_id;
      await db.addEmployee(
        employeeDetails.first_name,
        employeeDetails.last_name,
        employeeDetails.role_id,
        employeeDetails.manager_id
      );
      
      console.log(`Employee ${employeeDetails.first_name} ${employeeDetails.last_name} added!`);
      break;

    case 'Update employee role':
      const updateDetails = await inquirer.prompt([
        { type: 'input', name: 'employee_id', message: 'Enter Employee ID:' },
        { type: 'input', name: 'role_id', message: 'Enter New Role ID:' },
      ]);
      await db.updateEmployeeRole(updateDetails.employee_id, updateDetails.role_id);
      console.log(`Employee ID ${updateDetails.employee_id} updated with Role ID ${updateDetails.role_id}!`);
      break;

    case 'Exit':
      process.exit();
  }
  menu();
};

menu();
