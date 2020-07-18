const assert = require('assert');

const calc = require('./0-calcul');

describe("test sum", function () {
    it("check sum", function () {
        assert.equal(calc(2, 3), 5);
    }),
    it("check letters", function () {
        assert.throws(() => calc('h', 5), {
            name: 'TypeError',
            message: 'two arguments must be a number'
          });
    }),
    it("check round up", function () {
        assert.equal(calc(2.5, 3), 6);
    }),
    it("check round down", function () {
        assert.equal(calc(2.4, 3), 5);
    })
})