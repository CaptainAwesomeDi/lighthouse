var assert = require('assert');
var storeNumbers = require("../storeNumbersInAList.js");

describe('#storeNumberFn()', function() {
  it('should return nothing', function() {
    var result = storeNumbers.storeNumberFn(5);
    assert.equal(result, undefined);
  });
});

describe('#sortedFn()', function() {
  it('should return [5]', function() {
    storeNumbers.storeNumberFn(6)
    var result = storeNumbers.sortedFn();
    assert.equal(result.length, 2);
    assert.equal(result[0], 5);
    assert.equal(result[1], 6);
  });
});