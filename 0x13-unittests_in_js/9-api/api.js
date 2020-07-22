const express = require('express');

const port = 7865;
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
});

app.get('/cart/:id', (req, res) => {
    if(!Number(req.params.id))
        res.status(404)
    res.send(`Payment methods for cart ${req.params.id}`)
});

app.listen(port, () => {
    console.log('API available on localhost port 7865')
});

module.exports = app;
