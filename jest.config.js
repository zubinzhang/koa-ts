// Create by Zubin on 2018-08-13 10:09:32

module.exports = {
  // The bail config option can be used here to have Jest stop running tests after
  // the first failure.
  bail: false,

  // 对于 ts 代码和当前 node 还不支持的 js 代码，需要使用相应的转换器转换一下
  transform: {
    // 使用 ts-jest 转换 ts 代码。 ts 文件路径匹配 "^.+\\.tsx?$" 的，才会被转换。
    '^.+\\.tsx?$': 'ts-jest',
    // 使用 babel-jest 转换 js 代码。 js 文件路径匹配 "^.+\\.jsx?$" 的，才会被转换。
    '^.+\\.jsx?$': 'babel-jest',
  },
  // 转换过程中，需要被忽略的文件。
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each individual test should be reported during the run.
  verbose: false,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files.
  coverageDirectory: './coverage/',

  // If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: ['/(node_modules|lib|coverage|types)/'],

  // If the file path matches any of the patterns, coverage information will be skipped.
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // The pattern Jest uses to detect test files.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  globals: {
    'ts-jest': {
      // 过了 ts-jest 转换器，就不要过 babel 转换器了。
      skipBabel: true,
    },
  },
};
