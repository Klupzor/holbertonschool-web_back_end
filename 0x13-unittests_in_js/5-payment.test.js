const sinon = require("sinon");
const utils = require("./utils");
const assert  = require("assert");
const sendPaymentRequestToApi = require('./3-payment')

describe("sendPaymentRequestToAP", function () {
    let spyConsole;
    beforeEach(function () {
        spyConsole = sinon.spy(console, 'log');
    });
    afterEach(function () {
        spyConsole.restore();
    });
    it("100 20", function () {
        sendPaymentRequestToApi(100,20)
        assert(spyConsole.calledWithExactly('The total is: 120'), true)
        assert(spyConsole.calledOnce, true)
    });
    it("10 10", function () {
        sendPaymentRequestToApi(10,10)
        assert(spyConsole.calledWithExactly('The total is: 20'), true)
        assert(spyConsole.calledOnce, true)
    });
});