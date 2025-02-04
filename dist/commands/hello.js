"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloCommand = void 0;
const commander_1 = require("commander");
exports.helloCommand = new commander_1.Command("hello")
    .description("Affiche Hello World")
    .action(() => {
    console.log("Hello World!");
});
