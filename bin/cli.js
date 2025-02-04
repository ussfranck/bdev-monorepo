#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var version_1 = require("../src/commands/version");
var hello_1 = require("../src/commands/hello");
var check_1 = require("../src/commands/check");
var program = new commander_1.Command();
program.name('bdev').description('This is a minimal tool to manage monorepo').version('1.0.0');
program.addCommand(version_1.versionCommand);
program.addCommand(hello_1.helloCommand);
program.addCommand(check_1.checkCommand);
program.parse(process.argv);
