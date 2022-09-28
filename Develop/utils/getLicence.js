function getLicense(answers) {
  if (answers.license === "MIT") {
    return `MIT License Copyright (c) ${new Date().getFullYear()} ${answers.git}
    (https://mit-license.org/)`;
  }

  if (answers.license === "Apache") {
    return `Copyright ${new Date().getFullYear()} ${answers.git}
		(https://www.apache.org/licenses/LICENSE-2.0)`;
  }

  if (answers.license === "GNU GPLv3") {
    return `GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
		Copyright (C) 2007 Free Software Foundation, Inc. (https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  }
}
module.exports = getLicense;