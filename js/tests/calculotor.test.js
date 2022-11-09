const test = require("tape");
const Calculator = require("../calculator");

test('should throw when not authorized', (t) => {
  const calculator = new Calculator({
    authorize: () => false,
  });
  t.throws(() => calculator.divide(12, 6));
  t.end();
})