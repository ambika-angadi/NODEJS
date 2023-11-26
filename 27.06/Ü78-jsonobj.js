const express = require('express');
const app = express();
const port = 3000;

app.get('/json', (req, res) => {
  const jsonObject = {
    person: {
      name: 'John',
      age: 30
    }
  };
  res.json(jsonObject);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
