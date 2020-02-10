const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb://ddr9$#base7*&a:Jp7k8DhmYd7$#*jee@localhost:27017/pva?authSource=admin&authMechanism=SCRAM-SHA-1', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333);
