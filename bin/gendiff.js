#!/usr/bin/env node

import { Command } from 'commander';
import readFile from '../src/fileDiff.js';

const program = new Command();

program
  .option('-V, --version', 'output the version number')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .action((file1, file2) => {
    readFile(file1, file2);
  });

program.parse();
