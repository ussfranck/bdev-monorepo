"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloCommand = void 0;
var commander_1 = require("commander");
exports.helloCommand = new commander_1.Command("hello")
    .description("Affiche Hello World")
    .action(function () {
    console.log("Hello World!");
});
