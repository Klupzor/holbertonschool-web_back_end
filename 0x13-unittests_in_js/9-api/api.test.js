  
const request = require('request');
const { expect } = require('chai');

describe('Testing api', function() {
    it('request GET', function (done) {
    request({ url: 'http://localhost:7865', method: 'GET' }, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      expect(body).to.be.a('string');
    });
    done()
  });
  it('request GET cart id', function (done) {
    request({ url: 'http://localhost:7865/cart/12', method: 'GET' }, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      expect(body).to.be.a('string');
    });
    done()
  });
});
