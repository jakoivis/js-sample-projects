// Karma configuration
// Generated on Sun Jun 05 2016 00:30:04 GMT+0300 (FLE Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/**/*.js': ['browserify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Use ChromeHidden to run tests on chrome while chrome window is hidden
    customLaunchers: {
        ChromeHidden: {
            base: 'Chrome',
            flags: ['--window-size=300,300', '--window-position=-9999,0']
        }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    browserify: {
        watch: true,
        debug: true,
        transform: [ 'brfs' ]
    },


    // assets dir can be used for loading of files and stuff
    // by referencing to e.g. assets/sample1_tb.png in test code
    // it will be loaded from http://localhost:8080/assets/sample1_tb.png
    proxies: {
        '/assets/': 'http://localhost:8080/assets/'
    }
  })
}
