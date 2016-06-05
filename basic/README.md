


1. install some stuff
    - npm install -g npm-check-updates
    - npm install -g karma-cli
2. update all dependencies
    - ncu -u
3. create directory structure

directory structure (mandatory files and directories marked with !)
- dist              !
- src               !
    - index.js      !
    - **/*.js
    - **/*.html
- test
- styles            !
    - main.styl     !
    - *.otf
- assets
    - **/*


TODO:
livereload import in html page only when developing: npm run watch. with build command that shouldn't be there



"build:js": "browserify -d src/index.js > dist/main.js",

"build:js": "browserify -d src/index.js -p [minifyify --map index.js.map --output index.js.map] > dist/index.js",



    "test": "mocha ./test/**/*.spec.js --reporter Spec",
    "watch:test": "watch \"npm run test\" test",
    "coverage": "istanbul cover _mocha -- -R Spec",
    "cov": "istanbul cover node_modules/mocha/bin/mocha -- ./test/**/*.spec.js --reporter Spec"