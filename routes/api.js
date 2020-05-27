const express = require('express');

const router = express.Router();

let number = Math.round(Math.random() * 1023);


let count = 0;

// Express routing https://expressjs.com/en/guide/routing.html

// GET /api/random -- Skall returnera ett JSON-objekt i formatet { “number”: tal }

router.get('/show', (req, res) => {

  res.send({ count })
})
// GET /api/add -> { success: true }
router.get('/add', (req, res) => {

  res.send({ success: true })
  count++;

})

router.get('/random', (req, res) => {
  //const message = randNum; // så typ en Rand()? <---- exakt   ,, typ så eller?
  res.send({ number })
})

// https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js/6914675#6914675
router.get('/custom_random/:num', function(req, res) {
  console.log(req.params) // { num: '100' }
  number = req.params.num // 500
  number = Math.round(Math.random() * req.params.num);
  console.log("number = " + number)
  res.send({ number })
});

router.post('/post-request', (req, res) => {
  const message = 'post request som ska göra något av eget val'
  res.send({value: message})
})

module.exports = router;




