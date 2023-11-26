const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/formdata', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.post('/formdata', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  console.log('Received form data:');
  console.log('Name:', name);
  console.log('Age:', age);

  res.send('Form data received successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
