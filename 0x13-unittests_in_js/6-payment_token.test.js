const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');


describe('getPaymentTokenFromAPI', () => {
    it('waiting for the answer', async function(){
      const response = await getPaymentTokenFromAPI(true);
      assert(response, { data: 'Successful response from the API' })

    });
  });