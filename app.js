const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>CI/CD Pipeline is working fine!</h1>');
});

app.get('/shaurya', (req, res) => {
    res.send('<h1>Hello I am shaurya This is my DevOps End term Execution!</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});