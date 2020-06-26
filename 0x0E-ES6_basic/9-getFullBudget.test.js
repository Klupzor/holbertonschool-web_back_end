const { default: getFullBudgetObject } = require("./9-getFullBudget");

test('object assignment', () => {
  const obj = getFullBudgetObject(1, 2, 3);

  expect(obj.capita).toBe(3);
  expect(obj.getIncomeInDollars(1)).toBe("1");
  expect(obj.getIncomeInEuros(1)).toBe("1 euros");
});
