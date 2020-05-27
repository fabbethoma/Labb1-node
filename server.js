const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes); // skapar en endpoint localhost:3000/api man ska kalla api:et på.

/* app.use(express.static('landing-page')); */  //För Labb 1 G
/* app.use('/public', express.static('landing-page')); */  //För Labb 1 G

app.listen(port, () => console.log(`listening on port ${port}!`));
