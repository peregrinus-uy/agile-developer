const cypress = require('cypress');
const app = require('../app');

const server = app.listen(3001, () => {
  console.info('Running tests on port 3001...');
  cypress.run().then(() => {
    server.close();
  });
});
