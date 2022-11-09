const test = require("tape");
const Calculator = require("../calculator");

class AuthorizerTest {
  authorize() {
    return true;
  }
}

test("should throw when not authorized", (t) => {
  
  // TODO: write a test that fails due to the bug in
  const calculator = new Calculator(new AuthorizerTest());
  calculator.divide(12, 6);

  t.end();
});
