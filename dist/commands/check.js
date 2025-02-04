"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCommand = void 0;
const commander_1 = require("commander");
const child_process_1 = require("child_process");
exports.checkCommand = new commander_1.Command("check")
    .description("Vérifie si Node.js et PNPM sont installés")
    .action(() => {
    try {
        const nodeVersion = (0, child_process_1.execSync)('node -v', { stdio: 'pipe' }).toString().trim();
        console.log(`✅ Node.js détecté : ${nodeVersion}`);
    }
    catch (_a) {
        console.error("❌ Node.js non installé");
        return;
    }
    try {
        const pnpmVersion = (0, child_process_1.execSync)("pnpm -v").toString().trim();
        console.log(`✅ PNPM détecté : ${pnpmVersion}`);
    }
    catch (_b) {
        console.error("❌ PNPM non installé");
    }
});
