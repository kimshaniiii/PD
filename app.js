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



//react projects
app.get('/pizzaco', (req, res) => {
    res.render('pizzaco', { activePage: 'portfolio' });
});

app.get('/travellist', (req, res) => {
    res.render('travellist');
});

app.get('/tasklist', (req, res) => {
    res.render('tasklist');
});



//immersive tech projects
app.get('/namecard', (req, res) => {
    res.render('namecard');
});

app.get('/escaperoom', (req, res) => {
    res.render('escaperoom');
});



//uiux projects
app.get('/ecofashion', (req, res) => {
    res.render('ecofashion');
});

app.get('/learnrp', (req, res) => {
    res.render('learnrp');
});

app.get('/moodmatch', (req, res) => {
    res.render('moodmatch');
});



//graphic design projects
app.get('/travelly', (req, res) => {
    res.render('travelly');
});

app.get('/character', (req, res) => {
    res.render('character');
});

app.get('/typo', (req, res) => {
    res.render('typo');
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

