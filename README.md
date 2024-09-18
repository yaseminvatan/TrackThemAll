# TrackThemALl 🖥️

## Description

Employee Tracker is a command-line application built with Node.js, Inquirer, and PostgreSQL that allows a business owner to manage their company's employee database. It provides a Content Management System (CMS) interface for non-developers to easily view and interact with departments, roles, and employees within the company.

## Table of Contents 📖

* Installation
* Usage
* Database Schema
* Features
* Demo
* License
  ## Installation

### Prerequisites
* Node.js (version 16 or higher)
* PostgreSQL
* A PostgreSQL client like pgAdmin or the psql command-line tool.
### Steps
1. Clone the repository to your local machine:

  git clone https://github.com/yaseminvatan/TrackThemAll.git

2. Navigate into the project directory:

  cd employee-tracker

3. Install the required Node.js dependencies:

npm install

4. Set up your PostgreSQL database:

* Create a new PostgreSQL database, e.g., employee_db.
* Use the provided SQL files (schema.sql and seeds.sql) to create the necessary tables and populate them with initial data.
Example:


psql -U your-username -d employee_db -f db/schema.sql

psql -U your-username -d employee_db -f db/seeds.sql

5. Configure the PostgreSQL connection in db/connection.js:

js:

const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'employee_db',
  password: 'your-password',
  port: 5432,
});

## Usage

Once the setup is complete, you can run the application with the following command:

bash

node index.js

This will present you with a command-line interface menu where you can:

* View all departments
* View all roles
* View all employees
* Add a department
* Add a role
* Add an employee
* Update an employee's role
  
### Example Menu:

sql

? What would you like to do?
> View all departments
> 
>  Add a department
> 
>  Exit

### Viewing Departments Example:
If you select "View all departments", you'll see a formatted table showing all departments:



+----+--------------+

| ID | Department   |

+----+--------------+

| 1  | Marketing    |

| 2  | Sales        |

| 3  | Engineering  |

+----+--------------+

### Adding a Department Example:

When adding a department, you'll be prompted to enter the name of the new department, which will then be added to the database.

## Database Schema


The database contains three main tables:

ADD FHOTO

## Features

* View Departments: See a list of all company departments.
* View Roles: View all roles with job titles, departments, and salaries.
* View Employees: See a list of employees along with their IDs, names, roles, departments, salaries, and managers.
* Add Departments: Add a new department to the database.
* Add Roles: Add a new role to a department with a specified salary.
* Add Employees: Add a new employee to a role and assign a manager.
* Update Employee Roles: Change the role of an existing employee.
## Bonus Features
* Update Employee Managers: Change an employee's manager.
* View Employees by Manager: Display employees grouped by their managers.
* View Employees by Department: Display employees grouped by their department.
* Delete Departments, Roles, or Employees: Remove entries from the database.
* View Department Budget: View the total utilized budget (sum of salaries) for a department.

## Demo

Here’s a link to the walkthrough video that demonstrates the full functionality of the application: Walkthrough Video

## License

This project is licensed under the MIT License.








