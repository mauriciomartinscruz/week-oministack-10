const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello World, man'
    });
});

app.listen(3333);
