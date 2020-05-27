const express = require('express');

const router = express.Router();

const randNum = Math.round(Math.random() * 1023);

// Express routing https://expressjs.com/en/guide/routing.html

// GET /api/random -- Skall returnera ett JSON-objekt i formatet { “number”: tal }
router.get('/randomNumber', (req, res) => {
  
  const message = randNum; // så typ en Rand()? <---- exakt   ,, typ så eller?
  res.send({number: 'Random number ' + message})
})

//GET /api/custom_random/num -- skall returnera ett slumpmässigt tal mellan 0 och num enligt samma format som ovan.
//router.get('/randonNumber/:number') dynamisk route. :number är en siffra

// GET /api/random -- Skall returnera ett JSON-objekt i formatet { “number”: tal }
// tal är ett nummer mellan 0 och 1023
// GET /api/custom_random/num -- skall returnera ett slumpmässigt tal mellan 0 och num enligt samma format som ovan.


//HÄR NEDAN KOMMER POST REQUESTEN
//Skapa ytterligare en endpoint, fritt val. 
//Vill ni verkligen utmana er, så gör så att det tar emot en POST, hanterar datan, och spottar ur sig information, t.ex räknar antalet vokaler.
router.post('/post-request', (req, res) => {
  // du kan döpa routen till vad du vill såklart. Men det är ett post request som är viktigt. 
  const message = 'post request som ska göra något av eget val'
  res.send({value: message})
})

module.exports = router;


/* const allNumbers = []
//dynamic routing - https://stackoverflow.com/questions/25623041/how-to-configure-dynamic-routes-with-express-js
router.get('/custom-random/:num', (req, res, next) => {
  let num = req.params.num
  let number = randomNumber(num)
  allNumbers.push(number)
  res.send({ number: number });
});

let evenNumbers = []
router.post('/even-numbers', (req, res, next) => {
  for (let i = 0; i < allNumbers.length; i++) {
    if (allNumbers[i] % 2 === 0) {
      evenNumbers.push(allNumbers[i])
    }
  }
  res.send({ even: evenNumbers })
}) */


