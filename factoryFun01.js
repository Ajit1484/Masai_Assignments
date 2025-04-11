// Write a factory function called createEmployee that generates an object representing an employee. Each employee object should have the properties name, role, and salary, along with a method introduce() that prints a message introducing the employee's name and role.

// Steps:

// Create the factory function createEmployee.
// The function should accept name, role, and salary as parameters.
// Return an object with properties name, role, salary, and a method introduce().
// The introduce() method should print a string: "Hello, I am [name], working as a [role]."


// const employee1 = createEmployee("Alice", "Developer", 60000);
// employee1.introduce();
// Output: Hello, I am Alice, working as a Developer.

function createEmployee(name,role,salary){
  let employee = {};

  employee.name = name;
  employee.role =role;
  employee.salary = salary;

  employee.introduced = function(){
    console.log(`hello, i am ${employee.name} working as a ${employee.role}`)
  }
  return employee;
}

let obj = createEmployee("Alice","developer",60000);
obj.introduced();