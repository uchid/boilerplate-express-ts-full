module.exports = {
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.dev.json',
    },
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s'],
};
