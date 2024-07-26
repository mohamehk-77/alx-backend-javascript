const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 5 when inputs are 1 and 3.7', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -1 when inputs are 1 and 1.8', () => {
      expect(calculateNumber('SUBTRACT', 1, 1.8)).to.equal(-1);
    });

    it('should return 0 when inputs are 1.5 and 1.5', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 2 when inputs are 4 and 1.8', () => {
      expect(calculateNumber('DIVIDE', 4, 1.8)).to.equal(2);
    });

    it('should return "Error" when inputs are 1.5 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });

    it('should return "Error" when inputs are 1.5 and 0.4', () => {
      expect(calculateNumber('DIVIDE', 1.5, 0.4)).to.equal('Error');
    });
  });

  it('should throw an error for invalid type', () => {
    expect(() => {
      calculateNumber('MULTIPLY', 1, 3.7);
    }).to.throw('Invalid type');
  });
});
