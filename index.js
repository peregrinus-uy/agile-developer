const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.info(`Listening on http://localhost:${PORT}/`);
});
