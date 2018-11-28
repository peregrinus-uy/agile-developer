const cypress = require('cypress');
const nodemon = require('nodemon');

nodemon({
  script: 'index.js',
  ext: 'js',
  env: {
    "PORT": 3001
  }
});

nodemon.on('start', function () {
  console.log('Nodemon started');
  cypress.open().then(process.exit);
}).on('quit', function () {
  console.log('Nodemon stopped');
  process.exit();
}).on('restart', function (files) {
  console.log('Nodemon restarted due to: ', files);
});
