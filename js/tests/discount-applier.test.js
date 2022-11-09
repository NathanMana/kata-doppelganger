const test = require('tape')
const DiscountApplier = require('../discount-applier');

class NotifierTest {

  constructor() {
    this.users = [];
  }

  notify(user, message) {
    this.users.push(user);
  }
}

test('apply v1', (t) => {

  // TODO: write a test that fails due to the bug in
  const users = ["Test", "Jean"];
  const discountApplier = new DiscountApplier(new NotifierTest());
  discountApplier.applyV1(20, users);

  t.equal(discountApplier.notifier.users, users);

  t.end()
})

test('apply v2', (t) => {
  
  // TODO: write a test that fails due to the bug in
  const users = ["Test", "Jean"];
  const discountApplier = new DiscountApplier(new NotifierTest());
  discountApplier.applyV2(20, users);

  t.equal(discountApplier.notifier.users, users);

  t.end()
})
