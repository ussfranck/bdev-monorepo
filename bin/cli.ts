#!/usr/bin/env node

import { Command } from 'commander';
import { versionCommand } from '../src/commands/version';
import { initMonorepo } from '../src/commands/init';
import { checkCommand } from '../src/commands/check';

const program = new Command();
program.name('bdev').description('This is a minimal tool to manage monorepo').version('1.0.0');

program.addCommand(versionCommand);
program.addCommand(initMonorepo);
program.addCommand(checkCommand);

program.parse(process.argv);