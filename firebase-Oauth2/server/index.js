const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

const authentication = require('./middleware/firebase');
const userRoutes = require('./routes/users');

server.use('/authorization', authentication, userRoutes);


server.listen(5000, () => {console.log(`Server listening on port 5000...`)})