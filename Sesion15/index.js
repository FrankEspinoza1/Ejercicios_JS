const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Franklin Espinoza Espindola');
})

server.listen(port, hostname, () => {
    console.log(`El servidor de esta ejecutando en http://${hostname}:${port}/`)
})

/*const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(' suma: 10 + 10 = 20')
})

app.listen(port,() => {
    console.log(`El servidor se esta ejecutando en http://localhost:${port}/`)
})*/