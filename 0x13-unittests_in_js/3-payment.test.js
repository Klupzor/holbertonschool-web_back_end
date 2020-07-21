const sinon = require("sinon");
const { calculateNumber } = require("./utils");
const assert  = require("assert");
const sendPaymentRequestToApi = require('./3-payment')

describe("Payment", function () {
    it("spy function", function () {
        const callback = sinon.spy(sendPaymentRequestToApi);
        const spyConsole = sinon.spy(console, 'log');

        afterEach(function () {
            spyConsole.restore();
        });
        callback(20,20)
        assert(callback.calledOnce, true)
        assert(spyConsole.calledWithExactly('The total is: 40'), true)
        assert(sendPaymentRequestToApi(20,20), calculateNumber('SUM', 20, 20))
    });
});