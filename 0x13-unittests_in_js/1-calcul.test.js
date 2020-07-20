const assert = require('assert');

const calc = require('./1-calcul');

describe("test SUM", function () {
    it("check sum", function () {
        assert.equal(calc( 'SUM', 2, 3), 5);
    }),
    it("check letters", function () {
        assert.throws(() => calc('SUM', 'h', 5), {
            name: 'TypeError',
            message: 'two arguments must be a number'
          });
    }),
    it("check round up", function () {
        assert.equal(calc('SUM', 2.5, 3), 6);
    }),
    it("check round down", function () {
        assert.equal(calc('SUM', 2.4, 3), 5);
    })
})

describe("test SUBTRACT", function () {
    it("check simple subtract", function () {
        assert.equal(calc('SUBTRACT', 5, 2), 3);
    }),
    it("check letters", function () {
        assert.throws(() => calc('SUBTRACT', 'h', 5), {
            name: 'TypeError',
            message: 'two arguments must be a number'
          });
    }),
    it("check round up", function () {
        assert.equal(calc('SUBTRACT', 7.5, 3), 5);
    }),
    it("check round down", function () {
        assert.equal(calc('SUBTRACT', 2.4, 3), -1);
    })
})

describe("test DIVIDE", function () {
    it("check simple divide", function () {
        assert.equal(calc('DIVIDE', 8, 2), 4);
    }),
    it("check divide by 0", function () {
        assert.equal(calc('DIVIDE', 10.3, 0).toLowerCase(), 'error');
        assert.equal(calc('DIVIDE', 10.7, 0).toLowerCase(), 'error');
        assert.equal(calc('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
        assert.equal(calc('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
    }),
    it("check round up", function () {
        assert.equal(calc('DIVIDE', 7.5, 2), 4);
    }),
    it("check round down", function () {
        assert.equal(calc('DIVIDE', 9.1, 3), 3);
    })
})

describe("Error type Argument", function () {
    it("no type", function () {
        assert.throws(() => calc(8, 5), {
            name: 'TypeError',
            message: 'two arguments must be a number'
          });
    }),
    it("wrong type", function () {
        assert.throws(() => calc('uno', 8, 5), {
            name: 'TypeError',
            message: 'only valid type: SUM | SUBTRACT | DIVIDE'
          });
    })
})
