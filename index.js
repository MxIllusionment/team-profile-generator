const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./src/renderTeamPage");
const valid = require("./src/validation");
const { Employee, Manager, Engineer, Intern } = require("./lib/Employee");

/* Questions to ask to construct manager data */
const managerQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "name",
    validate: valid.name
  },
  {
    type: "input",
    message: "What is the team manager's employee ID?",
    name: "id",
    validate: valid.id
  },
  {
    type: "input",
    message: "What is the team manager's email address?",
    name: "email",
    validate: valid.email
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "office",
    validate: valid.officeNumber
  },
];

/* Questions to ask for additional employees */
const employeeQuestions = [
  {
    type: "list",
    message: "Add an additional employee?",
    choices: ["Engineer", "Intern", "Finish"],
    name: "choice"
  },
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
    validate: valid.name,
    when: answers => answers.choice !== "Finish"
  },
  {
    type: "input",
    message: "What is the employee's ID?",
    name: "id",
    validate: valid.id,
    when: answers => answers.choice !== "Finish"
  },
  {
    type: "input",
    message: "What is the employee's email address?",
    name: "email",
    validate: valid.email,
    when: answers => answers.choice !== "Finish"
  },
  {
    type: "input",
    message: "What is the engineer's GitHub user name?",
    name: "github",
    validate: valid.github,
    when: answers => answers.choice === "Engineer"
  },
  {
    type: "input",
    message: "Where does the intern go to school?",
    name: "school",
    validate: valid.school,
    when: answers => answers.choice === "Intern"
  },
];

/* Container for Employee objects */
var employeeData = {
  manager: null,
  engineers: [],
  interns: []
};

/* Saves HTML and CSS files based on employee data */
function saveFiles(dir) {
  /* Write HTML to file */
  fs.writeFile(dir + "/index.html", render.teamPage(employeeData), err => {
    err ? console.log(err) : console.log("HTML file written successfully.")
  });

  /* Write CSS to file */
  fs.writeFile(dir + "/style.css", render.CSS(), err => {
    err ? console.log(err) : console.log("CSS file written successfully.");
  });
}

/* Function to prompt for employee data, recursively called for additional employees */
function employeePrompt(dir) {
  inquirer.prompt(employeeQuestions)
    .then(answers => {
      /* Process new employee data */
      if (answers.choice !== "Finish") {
        let newEmployee;
        switch (answers.choice) {
          case "Engineer":
            newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeeData.engineers.push(newEmployee);
            break;
          case "Intern":
            newEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeeData.interns.push(newEmployee);
            break;
        }
        /* Ask if user wants to add another employee */
        employeePrompt(dir);
      } else {
        /* Save files and complete */
        saveFiles(dir);
      }
    });
}

/* Initializes app and starts prompt */
function init() {
  /* Directory to save data to */
  var dir = "./dist";

  // Create output directory if it doesn't already exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  /* Prompt for manager data */
  inquirer.prompt(managerQuestions)
    .then(answers => {
      let manager = new Manager(answers.name, answers.id, answers.email, answers.office);
      employeeData.manager = manager;

      /* Prompt for additional employee data, saving data when complete*/
      employeePrompt(dir);
    });

}

init();