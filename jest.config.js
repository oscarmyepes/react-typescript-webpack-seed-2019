module.exports = {
  verbose: true,
  roots: ["<rootDir>/test"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/test/setUp.ts"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["html", "json", "text"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  }
};
