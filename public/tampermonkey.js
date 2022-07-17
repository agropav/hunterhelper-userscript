// ==UserScript==
// @name         hunterhelper-userscript
// @namespace    http://tampermonkey.net/
// @version      (See remote script)
// @description  Adds some usefull features on twitter site. E.g.: highlighting different followings groups, hide useless stuff and more.
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// @run-at       document-body
// ==/UserScript==

// Userscript for Tampermonkey (https://www.tampermonkey.net/)
// that loads and executes a remote script.
(function () {
  'use strict';

  // The URL at which the tampermonkey script fetches your desired scripts
  const scriptUrls = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js", // Remote third party script(s)
    "https://raw.githubusercontent.com/agropav/hunterhelper-userscript/master/public/bundle.js", // Your own script(s)
  ];

  // The body of the Tampermonkey script. Fetches scripts from URLs and adds them to the document in script tags.
  // The scripts are not loaded via the src on a script tag because GitHub has cross origin resource blocking
  // on raw github user content.
  Promise.all(scriptUrls.map(url => fetch(url).then(response => response.text())))
      .then(scriptBodies => scriptBodies.forEach(scriptBody => {
        const scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.text = scriptBody;
        document.body.appendChild(scriptElement);
      }));

}());
