// ==UserScript==
// @name         CheckInjector
// @namespace
// @version      1.0.0
// @description  Modified Mr.Sonic Master code to enable checks on eclipsecrossword
// @author       Agenericusername
// @match        *
// @include      https://share.eclipsecrossword.com/*
// @run-at       document-start
// ==/UserScript==
// AnRK - An RKeins Subsidiary
var oldbutton = '<a id="check-button" style="display: none;">';

var newbutton = '<a id="check-button">';

var newJSFile = '"checks":true';

var oldJSFile = '"checks":false';

var pattern = new RegExp(oldJSFile, "i");
var pattern2 = new RegExp(oldbutton, "i");
function injectScript(originalPage) {
    var moddedPage = originalPage.replace(pattern, newJSFile);
    var moddedPage2 = moddedPage.replace(pattern2, newbutton);
    document.open();
    document.write(moddedPage2);
    document.close();
    alert("Injection Script Loaded!");
}

setTimeout(function() {
    injectScript(document.documentElement.outerHTML);
}, 1111);