

  function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD':
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      default:
        return '';
    }
  }
  
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPL':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'BSD':
        return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
        return '';
    }
  }
  

  // Function to return the license section of the README based on the license type
  function renderLicenseSection(license) {
    if (license) {
      return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
    } else {
      return '';
    }
  }

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
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
For additional questions, find my GitHub [${data.github}](https://github.com/${data.github}/) or contact me at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
