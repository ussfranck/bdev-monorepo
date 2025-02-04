"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionCommand = void 0;
const commander_1 = require("commander");
exports.versionCommand = new commander_1.Command("version")
    .description("Affiche la version du programme")
    .action(() => {
    console.log("bdev-monorepo v1.0.0");
});
