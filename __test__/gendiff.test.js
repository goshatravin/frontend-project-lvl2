import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { dirname } from 'path';
import readFile from '../src/fileDiff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', filename);

test('first check', () => {
  const expected = `{
 -  follow: false
    host: hexlet.io
 -  proxy: 123.234.53.22
 -  timeout: 50
 +  timeout: 20
 +  verbose: true
}`;
  expect(readFile(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(expected);
});
