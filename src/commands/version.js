"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionCommand = void 0;
var commander_1 = require("commander");
exports.versionCommand = new commander_1.Command("version")
    .description("Affiche la version du programme")
    .action(function () {
    console.log("bdev-monorepo v1.0.0");
});
