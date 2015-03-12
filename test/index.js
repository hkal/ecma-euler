var fs = require('fs');
var path = require('path');
var assert = require('assert');

var Mocha = require('mocha');
var Test = Mocha.Test;
var Suite = Mocha.Suite;


var mocha = new Mocha();

function setupTest(file) {
    var testConfig = require(path.resolve(__dirname, file));
    var solution = require(testConfig.solutionLocation);

    var suite = Suite.create(mocha.suite, testConfig.name);

    testConfig.tests.map(function(test) {
        return new Test(test.description, function() {
            assert.equal(solution(test.args), test.answer);
        });
    })
    .forEach(function(test) {
        suite.addTest(test);
    });
}

var files = fs.readdirSync(__dirname);

files.filter(function(file) {
    return (/\.json$/.test(file))
})
.map(setupTest);

mocha.run();
