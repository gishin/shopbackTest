var chai = require('chai');
var expect = chai.expect;
var signup =  require('../../action/signup.js');

describe('tests for signup', function() {
  it('it should return the correct signup bonus', function() {
    expect(signup(["www.shopback.sg"])).to.equal(
         "Award bonus: 5.00 SGD");
    expect(signup(["www.shopback.my"])).to.equal(
         "Award bonus: 10.00 MYR");
  });
  it('it should prompt message for false input', function() {
    expect(signup([])).to.equal(undefined);
    expect(signup(["www.shopback.it"])).to.equal(
         "no such domain: www.shopback.it");
  });
});
