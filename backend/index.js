const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello World, man'
    });
});

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333);
