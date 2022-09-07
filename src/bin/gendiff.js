#!/usr/bin/env node

import  { Command } from 'commander';
import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .argument('<filepath1> <filepath2>')
    .action((data) => {
        console.log('DATA',data);
        const path1 = path.resolve(`${process.cwd()}/src/data`, data);
        const kek = readFileSync( path1 );
        console.log('123',JSON.parse(kek));
    });

program.parse();
