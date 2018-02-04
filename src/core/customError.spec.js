/* global expect */

const { CustomError } = require('./customError');

describe('Test suite for errorWithCode', () => {
  const throwIt = () => {
    throw new CustomError('the-code', 'a-badass-message');
  };

  it('should have the right message', () => {
    expect(throwIt).to.throw(CustomError, 'a-badass-message');
  });

  it('should have the message property', (done) => {
    try {
      throwIt();
    } catch (error) {
      expect(error.message).to.equal('a-badass-message');
      done();
    }

    expect.fail();
  });

  it('should have the code property', (done) => {
    try {
      throwIt();
    } catch (error) {
      expect(error.code).to.equal('the-code');
      done();
    }

    expect.fail();
  });

  it('should throw the error as a normal Error', (done) => {
    try {
      throwIt();
    } catch (error) {
      expect(error.stack.startsWith('Error')).to.be.true();
      done();
    }

    expect.fail();
  });
});
