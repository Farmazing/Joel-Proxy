const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(express.json());


app.listen(3000, () => {
  console.log('server listening on port 3002');
});