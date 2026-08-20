const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function checkEven(num) {
  return num % 2 === 0;
}

app.get('/', (req, res) => {
  res.send('<h1>🚀 My Node.js App is Live via CI/CD on Render!</h1>');
});

module.exports = checkEven;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
