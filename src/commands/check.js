"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCommand = void 0;
var commander_1 = require("commander");
var child_process_1 = require("child_process");
exports.checkCommand = new commander_1.Command("check")
    .description("Vérifie si Node.js et PNPM sont installés")
    .action(function () {
    try {
        var nodeVersion = (0, child_process_1.execSync)('node -v', { stdio: 'ignore' }).toString().trim();
        console.log("\u2705 Node.js detected : ".concat(nodeVersion));
    }
    catch (_a) {
        console.error("❌ Node.js unvailable on your computer");
        return;
    }
    try {
        var pnpmVersion = (0, child_process_1.execSync)("pnpm -v").toString().trim();
        console.log("\u2705 PNPM d\u00E9tect\u00E9 : ".concat(pnpmVersion));
    }
    catch (_b) {
        console.error("❌ PNPM is not installed on your computer");
    }
});
