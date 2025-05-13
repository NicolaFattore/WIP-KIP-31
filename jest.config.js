/** @type {import('jest').Config} */
export default {
  verbose: true,
  testEnvironment: 'node',
  transform: {},
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json'],
  testMatch: [
    '**/tests/**/*.test.[jt]s?(x)',
    '**/tests/**/*.spec.[jt]s?(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};