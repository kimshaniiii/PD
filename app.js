const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.js

app.get('/', (req, res) => {
    res.render('index', { activePage: 'home' }); 
});

app.get('/about', (req, res) => {
    res.render('about', { activePage: 'about' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { activePage: 'contact' });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { activePage: 'portfolio' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

