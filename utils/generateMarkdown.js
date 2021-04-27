// Grab the needed License
const licenseBadgeLinks = require("./licenseBadges");

function generateMarkdown(data) {
  // set url for license badge
  data.licenseBadge = licenseBadgeLinks[data.license];

  // return markdown content
  return `# ${data.title}
${data.licenseBadge}
## Description
${data.description}
## Table of Contents
* [Motivation](#motivation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Sources](#sources)
* [Questions](#questions)
## Motivation
\`
${data.motivation}
\`
## Usage
${data.usage}
## License
This repository is licensed under the ${data.license} license.
## Contributors
${data.contributors}
## Resources
\`
${data.resources}
\`
## Questions
Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username}) 
`;
}

module.exports = generateMarkdown;
