//function to generate markdown
function generateMarkdown(answers, licenseInfo) {
  return `# ${answers.title}

![badge](https://img.shields.io/badge/License-${answers.license}-blue)

## Table of Contents

- [Description](#description)
- [Installation Instructions](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
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

	GitHub Profile of Contributors:[${answers.contributions}](https://github.com/${answers.contributions}/)

## Tests

  ${answers.tests}

## Questions

  Have questions or feedback?\n
  Email: ${answers.email}\n
  GitHub Profile: [${answers.git}](https://github.com/${answers.git}/)\n
  GitHub Repository: [${answers.git}](https://github.com/${answers.git}/)
	`;
}
module.exports = generateMarkdown;
