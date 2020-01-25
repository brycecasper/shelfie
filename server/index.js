require('dotenv').config();
const massive = require('massive');
const express = require('express');
const ctrl = require('./ctrl');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const port = SERVER_PORT

app.use(express.json());

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('database connected');
    app.listen(port, () => {
        console.log(`Server running on ${port}`);
    })
})

//ENDPOINTS
app.get('/api/products', ctrl.read);
app.post('/api/product', ctrl.create);
app.delete('/api/product/:id', ctrl.delete);