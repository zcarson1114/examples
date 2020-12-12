var assert = require('assert');
var fib = require('../modules/fib.js');

describe('Fib', function() {
    it('should return 1 for n equals to 1 or 2', function() {
	assert.equal(fib(1), 1);
	assert.equal(fib(2), 1);	
    });
    it('should return correct number for n grater than 2', function() {
	assert.equal(fib(3), 2);
	assert.equal(fib(6), 8);
    });
});
