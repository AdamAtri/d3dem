const express = require('express');
const app = express();
const { join } = require('path');


app.use('/node', express.static('node_modules'));
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(3337, () => {console.log('listening on 3337')});
