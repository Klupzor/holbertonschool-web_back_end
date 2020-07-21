const calc = require('./utils').calculateNumber

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const res = calc('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${res}`);
    return res;
}