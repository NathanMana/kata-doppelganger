const sender = require('../mail-sender')
const test = require('tape')

class HttpClientTest {
  post(baseUrl, request) {

    if (!request.name
      || !request.email
      || !request.subject
      || !request.message) 
      return {code: 400};

    this.request = request;

    return {code: 503};
  }
}

test('send v1', (t) => {

  // TODO: write a test that fails due to the bug in
  const user = {name: "Jean", email: "jean@test.com"};
  const mailSender = new sender.MailSender(new HttpClientTest());
  mailSender.sendV1(user, "Hello world");

  t.equal(mailSender.httpClient.request.name, user.name);

  t.end()
})

test('send v2', (t) => {

  // TODO: wrte a test that fails due to the bug in
  const user = {name: "Jean", email: "jean@test.com"};
  const mailSender = new sender.MailSender(new HttpClientTest());
  const response = mailSender.sendV2(user, "Hello world");

  t.equal(response.code, 503);

  t.end()
})
