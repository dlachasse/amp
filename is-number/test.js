var test = require('tape');
var pack = require('./package.json');
var isNumber = require('./' + pack.main);


test('isNumber', function (t) {
    t.ok(!isNumber('string'), 'a string is not a number');
    t.ok(!isNumber(arguments), 'the arguments object is not a number');
    t.ok(!isNumber(undefined), 'undefined is not a number');
    t.ok(isNumber(3 * 4 - 7 / 10), 'but numbers are');
    t.ok(isNumber(NaN), 'NaN *is* a number');
    t.ok(isNumber(Infinity), 'Infinity is a number');
    t.ok(!isNumber('1'), 'numeric strings are not numbers');
    t.end();
});