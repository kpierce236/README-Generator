function generateMarkdown(data) {
  // Function to return a license badge based on the license type
  function renderLicenseBadge(license) {
    if (license) {
      return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else {
      return '';
    }
  }

  // Function to return the license link based on the license type
  function renderLicenseLink(license) {
    if (license) {
      return `\n* [License](#license)\n`;
    } else {
      return '';
    }
  }

  // Function to return the license section of the README based on the license type
  function renderLicenseSection(license) {
    if (license) {
      return `## License
This project is licensed under the ${license} license.`;
    } else {
      return '';
    }
  }

  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
For additional questions, contact [${data.github}](https://github.com/${data.github}/) at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
