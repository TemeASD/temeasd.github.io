const fs = require('fs');
const cheerio = require('cheerio');
const varSub = require('./variableSubstitution');

module.exports = {
    /**
     * @param {string} filepath path to folder where head.html is located
     * @param {cheerio} page the file you want to write your changes to
     * @todo
     * Cheerio doesn't enjoy selecting and replacing the "head" element.
     * Cheerio also injects the html tag in there even when it doesn't exist.
     * So we do it the old fashioned way, Regular Expressions and string.prototype.replace
     * A shit workaround but it works
     * @tutorial
     * Make sure that your head.html starts exactly "<head></head>" or this doesn't work.
    */
    writeHead: (filepath, page) => {
        const head = fs.readFileSync(`${filepath}\\head.html`, 'utf-8');
        const value = new RegExp('<html>*<head>*<\/head>*');
        const ogpage = page.html();
        const test = ogpage.replace(value, head);
        return cheerio.load(test);
    },

    /**
     * @param {string} filepath path to folder where header.html is located
     * @param {cheerio} page the file you want to write your changes to
     */
    writeHeader: (filepath, page) => {
        const header = fs.readFileSync(`${filepath}\\header.html`);
        const $header = cheerio.load(header);
        const headerhtml = $header('header').parent().html();
        page('template-header').replaceWith(headerhtml);
        return page;
    },

    /**
     * @param {string} filepath path to folder where nav.html is located
     * @param {cheerio} page the file you want to write your changes to
     */
    writeNav: (filepath,page) => {
        const nav = fs.readFileSync(`${filepath}\\nav.html`);
        const $nav = cheerio.load(nav);
        const navhtml = $nav('nav').parent().html();
        page('template-nav').replaceWith(navhtml);
        return page;
    },

    /**
     * @param {string} filepath path to folder where footer.html is located
     * @param {cheerio} page the file you want to write your changes to
     */
    writeFooter: (filepath, page) => {
        const footer = fs.readFileSync(`${filepath}\\footer.html`);
        const $footer = cheerio.load(footer);
        const footerhtml = $footer('footer').parent().html();
        page('template-footer').replaceWith(footerhtml);
        return page;
    },
    /**
     * @param {string} filepath path to folder where footer.html is located
     * @param {string} customElement the template of your element, has to include .html in the filename
     * @param {string} customElementTag this is the tag in your html page you intend to replace with the template.
     * For example "teplate-blockquote"
     * @param {string} layoutElement the starting element in your
     * template file, for example "blockquote"
     * @param {cheerio} page the file you want to write your changes to
     */
    writeCustomElement: (filepath, pageName, customElement, customElementTag, layoutElement, page) => {
        const element = fs.readFileSync(`${filepath}\\${customElement}.html`);
        const $element = cheerio.load(element);
        const elementhtml = $element(layoutElement).parent().html();
        page(customElementTag).replaceWith(elementhtml);
    },
};
