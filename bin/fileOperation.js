import fs from 'fs';
import lodash from 'lodash';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { dirname } from 'path';
import parsersFunction from './parsers.js';

const fileInfo = (file) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const getFixturePath = (filename) => path.join(__dirname, '..', filename);
  return parsersFunction(fs.readFileSync(file), getFixturePath(file));
};

const fileOperation = (file1, file2) => {
  const student1 = fileInfo(file1);
  const student2 = fileInfo(file2);

  const arrFromFirstObj = Object.keys(student1);
  const arrFromSecondObj = Object.keys(student2);
  const sum = lodash.sortBy([...arrFromFirstObj, ...arrFromSecondObj]);
  let fakeObj = '';
  const use = [];
  sum.forEach((item) => {
    if (student1[item] !== undefined && student2[item] !== undefined && !use.includes(item)) {
      use.push(item);
      if (student1[item] === student2[item]) {
        fakeObj += `    ${item}: ${student2[item]}\n`;
      } else {
        fakeObj += ` -  ${item}: ${student1[item]}\n`;
        fakeObj += ` +  ${item}: ${student2[item]}\n`;
      }
    } else if (student1[item] !== undefined && !use.includes(item)) {
      use.push(item);
      fakeObj += ` -  ${item}: ${student1[item]}\n`;
    } else if (student2[item] !== undefined && !use.includes(item)) {
      use.push(item);
      fakeObj += ` +  ${item}: ${student2[item]}\n`;
    }
  });
  const result = `{\n${fakeObj}}`;
  console.log(result);
  return result;
};

export default fileOperation;
