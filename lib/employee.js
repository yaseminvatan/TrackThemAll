const { getAllEmployees } = require('../db/queries');
const displayEmployees = async () => {
    const employees = await getAllEmployees();
    employees.forEach(emp => console.log(emp.name));
  };
  