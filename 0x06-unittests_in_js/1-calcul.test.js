const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 5 when inputs are 1 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -1 when inputs are 1 and 1.8', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 1.8), -1);
    });

    it('should return 0 when inputs are 1.5 and 1.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 2 when inputs are 4 and 1.8', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 1.8), 2);
    });

    it('should return "Error" when inputs are 1.5 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });

    it('should return "Error" when inputs are 1.5 and 0.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0.4), 'Error');
    });
  });

  it('should throw an error for invalid type', () => {
    assert.throws(() => {
      calculateNumber('MULTIPLY', 1, 3.7);
    }, /Invalid type/);
  });
});