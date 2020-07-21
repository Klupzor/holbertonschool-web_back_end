const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');


describe('getPaymentTokenFromAPI', () => {
    it('waiting for the answer', async function(){
      const res = await getPaymentTokenFromAPI(true)
      expect(res).to.eql({ data: 'Successful response from the API' });
    });
  });