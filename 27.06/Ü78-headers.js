const express = require('express');
const app = express();
const port = 3000;

app.get('/headers', (req, res) => {
  res.json(req.headers);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
