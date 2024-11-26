module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Ensures Jest runs in a DOM-like environment
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy", // Mock CSS imports
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transpile TypeScript files
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Jest setup
  testMatch: ["**/**/*.(spec|test).[jt]s?(x)"], // Match test files
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
