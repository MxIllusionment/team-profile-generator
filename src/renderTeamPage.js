/* Renders a row with the provided contents */
function renderRow(contents) {
  return `
    <div class="row justify-content-center">${contents}
    </div>`;
}

/* Renders the employee card for a set of inputs */
function renderEmployeeCard(name, title, idNum, email, addData) {
  let icon;
  let addDataHeader;

  /* Modify icon and data header based on title */
  switch (title) {
    case "Manager":
      icon = "mug-hot";
      addDataHeader = "Office Number:";
      break;
    case "Engineer":
      icon = "glasses";
      addDataHeader = "GitHub:";
      break;
    case "Intern":
      icon = "user-graduate";
      addDataHeader = "School:";
      break;
    default:
      icon = "question";
      addDataHeader = "???:";
  }

  /* Template for employee card */
  return `
      <div class="col-lg-4 mb-4">
        <div class="card employee-card">
          <div class="card-header employee-header">
            <h4>${name}</h4>
            <h5><i class="fas fa-${icon}"></i> ${title}</h5>
          </div>
          <div class="card-body">
            <div class="employee-entry">
              ID: ${idNum}
            </div>
            <div class="employee-entry">
              Email: <a href="mailto:${email}">${email}</a>
            </div>
            <div class="employee-entry">
              ${addDataHeader} ${addData}
            </div>
          </div>
        </div>`;
}

/* Renders the HTML page based on user input data */
function renderTeamPage(data) {
  const baseStart = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team Roster</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class="jumbotron text-center my-team-header">
    <h1>My Team Roster</h1>
  </header>
  <main class="container">`;

  const baseEnd = `
  </main>
</body>
</html>`;

  let employeeCards = "";

  /* TODO: Render manager card */

  /* TODO: Render engineer card(s) */

  /* TODO: Render intern card(s) */

  return baseStart + employeeCards + baseEnd;
}

/* Renders the CSS to style the team page */
function renderCSS() {
  return `
/* Style for main header */
.my-team-header {
  background-color: rgb(0, 46, 0);
  color: white;
}

/* Styling for each employee card */
.employee-card {
  border-radius: 5px;
  box-shadow: 3px 3px 7px 1px rgba(0,0,0,0.64);
}

.employee-header {
  background-color: darkgreen;
  color:white;
}

.employee-entry {
  border: 1px solid darkgray;
  border-radius: 3px;
  margin: 3px 0px;
  padding: 2px 5px;
}`;
}

module.exports = {
  teamPage: renderTeamPage,
  CSS: renderCSS
}