const express = require('express');
const app = express();
const port = 3000;

app.get('/user-agent', (req, res) => {
  const userAgent = req.headers['user-agent'];
  res.send(userAgent);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
