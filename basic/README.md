#Javascript sample project
Some project setups to get started with a new project. No gulp or grunt used, just npm

- runnin unit tests with karma and phantomjs (npm run test)
- minified output (npm run build)
- development in debug mode (npm run watch)

1. npm install
2. install some stuff
    - npm install -g npm-check-updates
    - npm install -g karma-cli
3. update all dependencies
    - ncu -u
4. create directory structure

directory structure (mandatory files and directories marked with !)
- dist              !
- src               !
    - index.js      !
    - \*\*/*.js
    - \*\*/*.html
- test
- styles            !
    - main.styl     !
    - *.otf
- assets
    - \*\*/*
