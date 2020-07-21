const sinon = require("sinon");
const utils = require("./utils");
const assert  = require("assert");
const sendPaymentRequestToApi = require('./4-payment')

describe("Payment", function () {
    it("spy function", function () {
        const callback = sinon.spy(sendPaymentRequestToApi);
        const stub = sinon.stub(utils, 'calculateNumber');
        stub.returns(10);
        const spyConsole = sinon.spy(console, 'log');

        afterEach(function () {
            spyConsole.restore();
            stub.restore();
        });
        callback(5,5)
        assert(callback.calledOnce, true)
        assert(spyConsole.calledWithExactly('The total is: 10'), true)
        assert(sendPaymentRequestToApi(20,20), utils.calculateNumber('SUM', 20, 20))
    });
});