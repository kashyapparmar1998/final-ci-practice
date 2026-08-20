const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function checkEven(num) {
  return num % 2 === 0;
}

app.get('/', (req, res) => {
  res.send('<h1 style="color: green; text-align: center; margin-top: 50px;">🎉 Congratulations Kashyap! Automated CI/CD is Fully Working! 🚀</h1>');
});

module.exports = checkEven;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
