const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;// port generalized

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})