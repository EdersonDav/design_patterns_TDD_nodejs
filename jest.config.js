const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  displayName: 'root-tests',
  testMatch: ['<rootDir>/patterns/**/**/*.test.js', '<rootDir>/patterns/**/**/*.test.ts'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  clearMocks: true,
};