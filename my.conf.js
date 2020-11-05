module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        '/Users/linusmjornstedt/Projects/tech_test/bank_tech_tests/src/bank.js',
        '/Users/linusmjornstedt/Projects/tech_test/bank_tech_tests/spec/BankSpec.js'
      ],
      browsers: ['Chrome'],
      singleRun: true,
      reporters: ['progress', 'coverage'],
      preprocessors: { '*.js': ['coverage'] }
    });
  };