const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb://ddr9$#base7*&a:Jp7k8DhmYd7$#*jee@localhost:27017/pva?authSource=admin&authMechanism=SCRAM-SHA-1', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333);
