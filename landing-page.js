const express = require('express');
const app = express();
const port = 3000;

// https://stackabuse.com/serving-static-files-with-node-and-express-js/?fbclid=IwAR1VC7Z7VjAQaJnisgfTsjSae5xfUUXWJR4-zxyd8pHh1KqwB84079DIH_s

app.get('/', (req, res) => {
    res.sendFile('./landing-page/home.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./landing-page/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./landing-page/contact.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`))
