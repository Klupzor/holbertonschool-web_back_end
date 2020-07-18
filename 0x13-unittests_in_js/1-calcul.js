function calculateNumber(a, b, type) {
    const num1 = Math.round(a);
    const num2 = Math.round(b);
    if (isNaN(num1) || isNaN(num2))
        throw new TypeError("two arguments must be a number");
    if (!type)
        throw new TypeError("type is mandatory");

    switch (type) {
        case 'SUM':
            return num1 + num2;
        case 'SUBTRACT':
            return num1 - num2;
        case 'DIVIDE':
            if (num2 === 0)
                throw new Error("Can not divide by 0");
            return num1 / num2;
        default:
            throw new TypeError("only valid type: SUM | SUBTRACT | DIVIDE");
    }
};

module.exports = calculateNumber;