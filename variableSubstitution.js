const path = require('path');
const fs = require('fs');

const pagesPath = path.join(__dirname, 'pages');

function jsonFileName(file) {
    const fileName = file.split('.').slice(0, -1).join('.');
    return `${fileName}.json`;
}

function getJson(file) {
    const jsonFile = fs.readFileSync(`${pagesPath}\\${file}`);
    return JSON.parse(jsonFile);
}
module.exports = {
    /** 
     * @param {string} pageName name of the html template with file extension
     * @param {cheerio} page cheerio page
     * @returns  
    */
    populateVariables: (pageName, page) => {
        const jsonFile = getJson(jsonFileName(pageName));
        let rawHtml = page.html();
        Object.keys(jsonFile).forEach((key) => {
            const replace = new RegExp('{{'+key+'}}')
            rawHtml = rawHtml.replace(replace, jsonFile[key]);
        });
        return rawHtml;
    },
};
