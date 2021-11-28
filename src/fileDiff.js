import fs from 'fs';
import lodash from 'lodash';

const readFile = (file1, file2) => {
  const data1 = fs.readFileSync(file1);
  const data2 = fs.readFileSync(file2);
  const student1 = JSON.parse(data1);
  const student2 = JSON.parse(data2);
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

export default readFile;
