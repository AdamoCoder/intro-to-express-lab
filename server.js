const express = require('express')
const app = express()
// Define routes here:
app.get('/greetings/<username-parameter>', (req, res) => {
    console.log(req.params.greetings);
    res.send(`Hello there, ${username}!`);
});

app.get('/roll/<number-parameter', (req, res) => {
    const roll = req.query.roll;
    res.send(`You rolled a ${roll}!`);
});

app.get('/collectibles/<index-parameter', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];
    res.send(`So, you want the ${req.query.name}? For ${req.query.price}, it can be yours!`)    
});

app.get('/shoes', (req, res) => {
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];  
    res.send(`${req.query.name}, ${req.query.price}, ${req.query.type}`)
});

// Listen for requests on port 3000
app.listen(3008, () => {
    console.log('Listening on port 3008')
});
