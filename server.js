const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const upload = multer();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.post('/', upload.array(), (req, res) => {
  const submit = req.body;
  let data = fs.readFileSync('public/index.html', 'utf8');
  if (data)
    res.send(data.replace('submit=""', 'submit=' + JSON.stringify(submit)));
});

app.post('/openpixel', (req, res) => {
  console.log(req.query);
  res.status(200).json({ msg: 'hello' });
});

app.listen(8080, () => {
  console.log('app is running on port: 8080');
});
