module.exports = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      functions: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.globals.js'],
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
}
