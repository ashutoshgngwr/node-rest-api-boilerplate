# node-rest-api-boilerplate

A boilerplate to quicky start building REST APIs in NodeJS without writing (_too much_) boilerplate code.
HTTP Routes are auto-generated based on API definition (written in [OpenAPI Specification][open-api-spec]).

## Framework Stack

- [OpenAPI Specification v3][open-api-spec]
- [Fastify][fastify]
- [fastify-openapi-glue][fastify-openapi-glue-git]
- [Mongoose][mongoose]
- [Mocha][mocha], [NYC][nyc], [Sinon][sinon] and [Chai][chai] for automated testing and related metrics

## Environment Variables

- `DB_URI`: MongoDB URI

## Project Structure

- `api/oas.yml` is the source of truth (definition) of the REST API.
- `src/app.js` contains the boilerplate code to connect MongoDB client and to register
  `fastify-openapi-glue` middleware with proper configuration.
- `src/service.js` would contain implementations of all the operations defined in API defintion
  (ommitted in this boilerplate).
- `src/tests` contains cases to automate API testing.
- `index.js` contains the boilerplate code to start [Fastify][fastify] server at port `8080`.

## License

[MIT](LICENSE)

[open-api-spec]: https://swagger.io/docs/specification/about/
[fastify-openapi-glue-git]: https://github.com/seriousme/fastify-openapi-glue
[fastify]: https://www.fastify.io/
[mongoose]: https://mongoosejs.com/
[mocha]: https://mochajs.org/
[nyc]: https://istanbul.js.org/
[sinon]: https://sinonjs.org/
[chai]: https://www.chaijs.com/
