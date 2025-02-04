import { Command } from "commander"
export const helloCommand = new Command("hello")
	.description("Affiche Hello World")
	.action(() => {
		console.log("Hello World!")
	})
