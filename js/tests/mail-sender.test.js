const sender = require('../mail-sender')
const test = require('tape')

class ResponseTest {
  constructor(data, code)
  {
    this.code = code
    this.data = data
  }
}

class HttpClientTest {
  post(baseUrl, request)
  {
    this.checkRequestConsistency(request)

    if(request instanceof ResponseTest)
    {
      throw { message: "Request is instanceof ResponseTest"}
    }

    return new ResponseTest({}, 503)
  }

  checkRequestConsistency(request)
  {
    const regExp = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)

    if(!regExp.test(request.email))
    {
      throw { message: "email is not standard"}
    }
  }
}

test('send v1', (t) => {
  const httpClient = new HttpClientTest()
  const mailSender = new sender.MailSender(httpClient)
  const user = {name: "name", email: "mail@mail.com"}

  try {
    mailSender.sendV1(user, "test")
  }
  catch(err) {
    t.error(err)
  }

  t.end()
})

test('send v2', (t) => {
  const httpClient = new HttpClientTest()
  const mailSender = new sender.MailSender(httpClient)
  const user = {name: "test", email: "test@test"}

  try {
    const response = mailSender.sendV2(user, "test")
  }
  catch (error)
  {
    t.error(error.message)
  }

  t.end()
})