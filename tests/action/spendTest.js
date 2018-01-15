var chai = require('chai');
var expect = chai.expect;
var spend =  require('../../action/spend.js');

describe('tests for spend', function() {
  it('it should return the correct cash back', function() {
    expect(spend([0])).to.equal("No cashback");
    expect(spend([20])).to.equal("Award cashback: 3.00");
    expect(spend([100,5])).to.equal("Award cashback: 5.00");
    expect(spend([10,10,10])).to.equal("Award cashback: 1.00");
    expect(spend([20,10,15])).to.equal("Award cashback: 2.00");
  });
  // for boundary cases
  it('it should ignore non-number items', function() {
    expect(spend(['text'])).to.equal("No cashback");
    expect(spend([100,'text', 'aaa', 100, 200])).to.equal("Award cashback: 40.00");  
    expect(spend([40, -24 , -200, 100, 200])).to.equal("Award cashback: 30.00");  
  });
  
});
