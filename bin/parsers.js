import yaml from 'js-yaml';
import * as path from 'path';

const parsersFunction = (file, pathFile) => {
  const format = path.extname(pathFile);
  let result;
  if (format === '.yml' || format === '.yaml') {
    result = yaml.load(file);
  } if (format === '.json') {
    result = JSON.parse(file);
  }
  return result;
};

export default parsersFunction;
