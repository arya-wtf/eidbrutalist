const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously" });
if (dom.window.document.errors) {
  console.log("JSDOM Errors:", dom.window.document.errors);
}
console.log("Event listener count on open-btn?", dom.window.document.getElementById('open-btn') ? "Found button" : "No button");
setTimeout(() => {
  dom.window.document.getElementById('open-btn').click();
  console.log(dom.window.document.getElementById('act1').className);
}, 100);
