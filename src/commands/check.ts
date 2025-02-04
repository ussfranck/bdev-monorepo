import { Command } from "commander"
import { execSync } from "child_process"

export const checkCommand = new Command("check")
	.description("Vérifie si Node.js et PNPM sont installés")
	.action(() => {
		try {
			const nodeVersion = execSync('node -v', { stdio: 'ignore' }).toString().trim();
			console.log(`✅ Node.js detected : ${nodeVersion}`)
		} catch {
			console.error("❌ Node.js unvailable on your computer")
			return
		}

		try {
			const pnpmVersion = execSync("pnpm -v").toString().trim()
			console.log(`✅ PNPM détecté : ${pnpmVersion}`)
		} catch {
			console.error("❌ PNPM is not installed on your computer")
		}
	})
