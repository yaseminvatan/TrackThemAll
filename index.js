const inquirer = require('inquirer');
const db = require('./db/queries');

const menu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'Add a department',
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
        const {name} =await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Enter Department name',
        });
        await db.addDepartment(name);
        console.log('Department ${name} added!');
        break;
    case 'Exit':
        process.exit();
  }
  menu();
};
