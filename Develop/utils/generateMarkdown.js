// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   switch(license){
//     case 'MIT':
//       `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
//     break;
//     case 'APACHE 2.0':
//       `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
//     break;
//     case 'BSD 3':
//       `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
//     break;
//     case 'none':
//       ''
//     break;
//     default:
//       console.log('not valid license')
//     break;
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   switch(license){
//     case 'MIT':
//       `(https://opensource.org/licenses/MIT)`
//     break;
//     case 'APACHE 2.0':
//       `(https://opensource.org/licenses/Apache-2.0)`
//     break;
//     case 'BSD 3':
//       `(https://opensource.org/licenses/BSD-3-Clause)`
//     break;
//     case 'none':
//       ''
//     break;
//     default:
//       console.log('not valid license')
//     break;
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   renderLicenseBadge(license) + renderLicenseLink(license);
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage 

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

 ${data.contributors}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions

  Open an issue at https://github.com/${data.githubUsername}/${data.title}, or contact me directly at [my email](mailto:${data.email}?subject=[GitHub]).

`;
}

module.exports = generateMarkdown;
