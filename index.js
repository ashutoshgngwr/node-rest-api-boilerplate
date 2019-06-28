const app = require('./src/app');

app.listen(8080, '0.0.0.0', err => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log('Up and running at 8080');
});
