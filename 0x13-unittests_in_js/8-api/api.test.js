  
const request = require('request');
const { expect } = require('chai');

describe('Testing api', async function() {
    await it('request GET', function() {
      request({ url: 'http://localhost:7865', method: 'GET' }, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
      });
    });
});
