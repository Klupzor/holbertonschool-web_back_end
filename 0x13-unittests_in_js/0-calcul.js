function calculateNumber(a, b) {
    const res = Math.round(a) + Math.round(b);
    if (isNaN(res))
        throw new TypeError("two arguments must be a number");
    return res;
};

module.exports = calculateNumber;