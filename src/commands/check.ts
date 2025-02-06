import {Command} from "commander"
import {execSync} from "child_process"
import * as os from "os"
import * as process from "node:process";

export const checkCommand = new Command("check")
  .description("Check all information about nodejs environment variables")
  .action(() => {
    // @ts-ignore
    const shellToUse = os.platform() === 'win32' ? 'cmd.exe' : '/bin/sh';
    try {
      const nodeVersion = process.version
      console.log(`✅ Node.js detected : ${nodeVersion}`)
    } catch(reason) {
      console.error("❌ Node.js unavailable on your computer")
      console.log(`Error occurred: ${reason}`)
      return
    }

    try {
      const pnpmVersion = execSync("pnpm -v", { shell: shellToUse }).toString().trim()
      console.log(`✅ PNPM detected : ${pnpmVersion}`)
    } catch {
      console.error("❌ PNPM is not installed on your computer")
    }
  })
