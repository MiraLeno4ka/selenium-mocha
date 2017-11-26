var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()first', function() {
    it('should return -1 when the value is not present', function() {
      var a = [1,2,3].indexOf(4);
      console.log(a);
      assert.equal(-1, a);

    });
  });
  describe('#indexOf()second', function() {
    it('should return 2 when the value is present', function() {
      var a = [1,2,3].indexOf(3);
      console.log(a);
      assert.equal(2, a);

    });
  });
});

describe('Array2', function() {
  describe('#indexOf()first', function() {
    it('should return 3 when the value is present', function() {
      var a = [1,2,3,4,5].indexOf(4);
      console.log(a);
      assert.equal(3, a);

    });
  });
  describe('#indexOf()second', function() {
    it('-1 when the value is not present', function() {
      var a = [1,2,3,4,5].indexOf(47);
      console.log(a);
      assert.equal(-1, a);

    });
  });
});
