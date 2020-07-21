const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');


describe('getPaymentTokenFromAPI', () => {
    it('waiting for the answer', function(done){
      getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
  });