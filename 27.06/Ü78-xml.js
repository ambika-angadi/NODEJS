const express = require('express');
const app = express();
const port = 3000;

app.get('/xml', (req, res) => {
  const xmlObject = '<person><name>John</name><age>30</age></person>';
  res.type('application/xml');
  res.send(xmlObject);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
