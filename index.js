// Dependencies
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const sssg = require('./sssg');
const varSub = require('./variableSubstitution');
const utils = require('./utils');
// Needed paths here
const templatePath = path.join(__dirname, 'templates');
const pagesPath = path.join(__dirname, 'pages');

// Create output folder
const dir = './docs';
console.log('yea')
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

function createPage(pageName) {
    const htmlfile = fs.readFileSync(`${pagesPath}\\${pageName}`);
    let page = cheerio.load(htmlfile);
    page = sssg.writeHead(templatePath, page);
    page = sssg.writeHeader(`${templatePath}\\headers`, page);
    page = sssg.writeFooter(`${templatePath}\\footers`, page);
    page = sssg.writeNav(`${templatePath}\\navs`, page);
    page = varSub.populateVariables(pageName, page);
    fs.writeFileSync(`./docs/${pageName}`, page);
}


const pages = fs.readdirSync(pagesPath, { options: { withFiletypes: true } });
pages.forEach((page) => {
    console.log('eya')
    if (utils.fileType(page) === 'html') {
        createPage(page);
    }
});
