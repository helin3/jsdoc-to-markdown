"use strict";
var jsdoc2md = require("../");
var fs = require("fs");

/* fully-baked class */
jsdoc2md
    .render("example/src/uzi-lover.js", { "example-lang": "js" })
    .pipe(fs.createWriteStream("example/fully-baked-class.md"));

/* everything with separators */
jsdoc2md
    .render("example/src/**/*.js", { "example-lang": "js", separators: true })
    .pipe(fs.createWriteStream("example/everything-separators.md"));

/* from html */
jsdoc2md
    .render("example/html/*.html", { html: true })
    .pipe(fs.createWriteStream("example/from-html.md"));
