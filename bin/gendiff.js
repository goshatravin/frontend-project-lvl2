#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
    .option('-V, --version', 'output the version number')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format')
    .description('Compares two configuration files and shows a difference.')

program.parse();

