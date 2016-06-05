var moduleTest = require("./module.js");

var div = document.createElement("div");
div.innerText = moduleTest();
document.body.appendChild(div);