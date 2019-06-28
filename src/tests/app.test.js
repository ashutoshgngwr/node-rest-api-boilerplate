const mongoose = require('mongoose');
const { expect } = require('chai');
const app = require('../app');

before(async () => {
  await app.ready();
});

after(async () => {
  await app.close();
  await mongoose.disconnect();
});

describe('GET /', () => {
  it('should return 200', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/'
    });
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.equal('Hello, world!');
  });
});
