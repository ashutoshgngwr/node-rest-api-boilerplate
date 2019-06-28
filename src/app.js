const mongoose = require('mongoose');
const apiServer = require('fastify')({
  https: false,
  ignoreTrailingSlash: true
});

mongoose.connect(`${process.env.DB_URI}`, { useNewUrlParser: true }, err => {
  if (err) {
    console.error(`Is mongodb running?\n${err}`);
    process.exit(1);
  }
});

apiServer.register(require('fastify-openapi-glue'), {
  specification: './api/oas.yml',
  service: {
    helloWorld: (req, res) => res.send('Hello, world!')
  }
});

module.exports = apiServer;
