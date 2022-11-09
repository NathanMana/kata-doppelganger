const test = require('tape')
const DiscountApplier = require('../discount-applier');

class NotifierTest {

  constructor(users) {
    this.users = users;
  }

  notify(user, message) {
    
    const userInArray = this.users.find(u => u.name === user.name);
    userInArray.notified = true;
    userInArray.message = message;
  }
}

test('apply v1', (t) => {

  // TODO: write a test that fails due to the bug in
  const users = [{name: "Test"}, {name: "Jean"}];
  const discountApplier = new DiscountApplier(new NotifierTest(users));
  discountApplier.applyV1(20, users);

  discountApplier.notifier.users.forEach(user => {
    t.equal(user.notified, true);
  });

  t.end()
})

test('apply v2', (t) => {
  // TODO: write a test that fails due to the bug in
  // DiscountApplier.applyV2
  t.end()
})
