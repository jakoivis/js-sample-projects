
var chai = require('chai')

var moduleTest = require("../src/module.js");

chai.should();

describe("sample test", function() {
    it("test 1", function() {
        moduleTest().should.equal("test");
    });
});