const inquirer = require('inquirer');

const {writeFile} = require('fs').promises;

const questions = ["What is the title of your project", "Enter what you would like to be your Description", "Table of Contents", "Installation", "Usage", "Liscence", "Contributing", "Tests", "Github", "Email"]

const generateHTML = ({ title, liscence, description, installation, usage, contributing, github, email }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Read Me</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${title}</h1>

    <h3>Read me using: <span class="badge badge-secondary">${liscence}</span></h3>
  </div>
  </div>
  <section class="container">
  <h2>Description</h2>
  <p>${description}</p>
</section>
<section class="container">
  <h2>Table of Contents</h2>
  <ul></ul>
</section>
<section class="container">
  <h2>Installation</h2>
  <p>${installation}</p>
</section>
<section class="container">
  <h2>Usage</h2>
  <p>${usage}</p>
</section>
<section class="container">
  <h2>Contributing</h2>
  <p>${contributing}</p>
</section>
<section class="container">
  <h2>Links</h2>
  <p>${github}\n${email}</p>
</section>
</body>
</html>`;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'contents',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'liscence',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'contributing',
      message: questions[6],
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'github',
      message: questions[8],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[9],
    },
  ])
}


  const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();