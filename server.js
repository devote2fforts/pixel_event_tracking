const express = require('express');
const path = require('path');

const app = express();
app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.post('/openpixel', (req, res) => {
  console.log(req.query);
  res.status(200).json({ msg: 'hello' });
});

app.listen(8080, () => {
  console.log('app is running on port: 8080');
});
