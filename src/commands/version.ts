import { Command } from "commander"

export const versionCommand = new Command("version")
	.description("Affiche la version du programme")
	.action(() => {
		console.log("bdev-monorepo v1.0.0")
	})
