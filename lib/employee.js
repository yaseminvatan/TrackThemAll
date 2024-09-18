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
  }
}