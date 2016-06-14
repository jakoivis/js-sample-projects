
var moduleTest = require("../src/module.js");
var sinon = require("sinon");

describe("sample test", function() {
    it("test 1", function() {
        var spy = sinon.spy();
        moduleTest().should.equal("test");
    });
});