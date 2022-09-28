//function to generate markdown
function generateMarkdown(answers, licenseInfo) {
  return `# ${answers.title}

![badge](https://img.shields.io/badge/License-${answers.license}-blue)

## Table of Contents

- [Description](#description)
- [Installation Instructions](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Description

  ${answers.description}

## Installation

  ${answers.installation}

## Usage

  ${answers.usage}

## License

  ![badge](https://img.shields.io/badge/License-${answers.license}-blue)

  ${licenseInfo}

## Contributing

	${answers.contribute}

## Tests

  ${answers.tests}

## Questions

  Have questions or feedback?\n
  Email: ${answers.email}\n
  GitHub Profile: [${answers.git}](https://github.com/${answers.git}/)`;
}
module.exports = generateMarkdown;
