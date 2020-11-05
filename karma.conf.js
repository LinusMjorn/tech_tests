module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/bank.js',
            'spec/BankSpec.js'
        ],
        preprocessors: {
            'src/bank.js': ['coverage']
        },
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage'
        ],
        reporters: ['progress', 'coverage'],
        port: 9878,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autowatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: "html", subdir: "html" },
                { type: 'text-summary' }
            ]
        }
    });
};