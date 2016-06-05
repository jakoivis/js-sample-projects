#Javascript sample project
Basic project setups to get started with a new project. No gulp or grunt used, just npm.

##My target was to have the following features with this setup
- do release (npm run build)
    - collect all the files in release folder
    - minify output
- do development (npm run watch)
    - use commonjs modules
    - use html dom in unit tests
    - run tests when something has been changed
    - update browser when something has been changed
    - update coverage report when something have been changed
    - see the source code files in browser
    - run tests with chrome without chrome window jumping over all the other windows
    - load images in unit tests (tag.addEventListener('load', ...))

##Project Setup
1. npm install
2. install some stuff
    - npm install -g npm-check-updates
    - npm install -g karma-cli
3. update all dependencies
    - ncu -u
4. create directory structure

##directory structure (mandatory files and directories marked with !)
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
