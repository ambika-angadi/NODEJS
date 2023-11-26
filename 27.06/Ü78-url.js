const express = require('express');
const app = express();
const port = 3000;

app.get('/url', (req, res) => {
  const requestedUrl = req.url;
  res.send(requestedUrl);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
