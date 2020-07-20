const expect = require('chai').expect

const calc = require('./1-calcul');

describe("test SUM", function () {
    it("check sum", function () {
        expect(calc( 'SUM', 2, 3)).to.equal(5)
    }),
    it("check round up", function () {
        expect(calc('SUM', 2.5, 3)).to.equal(6)
    }),
    it("check round down", function () {
        expect(calc('SUM', 2.4, 3)).to.equal(5)
    })
})

describe("test SUBTRACT", function () {
    it("check simple subtract", function () {
        expect(calc('SUBTRACT', 5, 2)).to.equal(3)
    }),
    it("check round up", function () {
        expect(calc('SUBTRACT', 7.5, 3)).to.equal(5)
    }),
    it("check round down", function () {
        expect(calc('SUBTRACT', 2.4, 3)).to.equal(-1)
    })
})

describe("test DIVIDE", function () {
    it("check simple divide", function () {
        expect(calc('DIVIDE', 8, 2)).to.equal(4);
    }),
    it("check divide by 0", function () {
        expect(calc('DIVIDE', 10.7, 0.2)).to.equal('Error');
        expect(calc('DIVIDE', 10.7, 0.3)).to.equal('Error');
        expect(calc('DIVIDE', 10.7, 0)).to.equal('Error');
    }),
    it("check round up", function () {
        expect(calc('DIVIDE', 7.5, 2)).to.equal(4);
    }),
    it("check round down", function () {
        expect(calc('DIVIDE', 9.1, 3)).to.equal(3);
    })
})

