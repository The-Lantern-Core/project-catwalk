const express = require('express');
const bodyParser = require('body-parser');

const app = express();
<<<<<<< HEAD
const PORT = 3006;// port generalized
=======

const PORT = 3000;// port generalized
>>>>>>> 6f27bb482ed6453d233318c9ed60ab49484a11d8

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})