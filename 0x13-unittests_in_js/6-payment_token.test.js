const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');


describe('getPaymentTokenFromAPI', () => {
    it('waiting for the answer', function(done){
      getPaymentTokenFromAPI(true)
      .then((res) => {
        assert(res, { data: 'Successful response from the API' })
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
  });