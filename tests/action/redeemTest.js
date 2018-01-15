var chai = require('chai');
var expect = chai.expect;
var redeem =  require('../../action/redeem.js');

describe('tests for redeem', function() {
  it('it should return the correct cash back', function() {
    expect(redeem(["www.shopback.sg"])).to.equal(
      "Visit https://www.shopback.sg to start earning cashback!");
    expect(redeem(["www.shopback.my"])).to.equal(
      "Visit https://www.shopback.my to start earning cashback!");
  });
  it('it should prompt message for false input', function() {
    expect(redeem([])).to.equal(
      "error! incorrect argument length");
    expect(redeem(["www.shopback.it"])).to.equal(
      "no such domain: www.shopback.it");
  });

});
