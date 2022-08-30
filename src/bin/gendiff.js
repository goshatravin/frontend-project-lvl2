#!/usr/bin/env node

import  { Command } from 'commander';

const program = new Command();

program
    .name('-h', )
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .argument('<filepath1>')
    .argument('<filepath2>')

program.parse();
