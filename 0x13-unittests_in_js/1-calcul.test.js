const assert = require('assert');

const calc = require('./1-calcul');

describe("test SUM", function () {
    it("check sum", function () {
        assert.equal(calc(2, 3, 'SUM'), 5);
    }),
    it("check letters", function () {
        assert.throws(() => calc('h', 5, 'SUM'), {
            name: 'TypeError',
            message: 'two arguments must be a number'
          });
    }),
    it("check round up", function () {
        assert.equal(calc(2.5, 3, 'SUM'), 6);
    }),
    it("check round down", function () {
        assert.equal(calc(2.4, 3, 'SUM'), 5);
    })
})

describe("test SUBTRACT", function () {
    it("check simple subtract", function () {
        assert.equal(calc(5, 2, 'SUBTRACT'), 3);
    }),
    it("check letters", function () {
        assert.throws(() => calc('h', 5, 'SUBTRACT'), {
            name: 'TypeError',
            message: 'two arguments must be a number'
          });
    }),
    it("check round up", function () {
        assert.equal(calc(7.5, 3, 'SUBTRACT'), 5);
    }),
    it("check round down", function () {
        assert.equal(calc(2.4, 3, 'SUBTRACT'), -1);
    })
})

describe("test DIVIDE", function () {
    it("check simple divide", function () {
        assert.equal(calc(8, 2, 'DIVIDE'), 4);
    }),
    it("check divide by 0", function () {
        assert.throws(() => calc(20, 0, 'DIVIDE'), {
            name: 'Error',
            message: 'Can not divide by 0'
          });
    }),
    it("check round up", function () {
        assert.equal(calc(7.5, 2, 'DIVIDE'), 4);
    }),
    it("check round down", function () {
        assert.equal(calc(9.1, 3, 'DIVIDE'), 3);
    })
})

describe("Error type Argument", function () {
    it("no type", function () {
        assert.throws(() => calc(8, 5,), {
            name: 'TypeError',
            message: 'type is mandatory'
          });
    }),
    it("wrong type", function () {
        assert.throws(() => calc(8, 5,'uno'), {
            name: 'TypeError',
            message: 'only valid type: SUM | SUBTRACT | DIVIDE'
          });
    })
})