const express = require('express');
const routes = require('./models/routes');

const server = express();
const PORT = 3000;

server.use(express.json());

server.get('/', (req,res) => {
    res.send("root");
});

server.use('/waifus', routes.waifus());

// Server
server.listen(
    PORT, 
    () => console.log(`Server running at http://localhost:${PORT}`)
);