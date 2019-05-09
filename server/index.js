const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/group');

const groupRouter = require('./routes/group');
const joinRouter = require('./routes/join');

server.use(express.json());
server.use(cors());
server.use('/api/join', joinRouter);
server.use('/api/group', groupRouter);


mongoose.connect(`mongodb+srv://${process.env.ATLAS_USER}:${process.env.MONGODB_ATLAS_PW}@cluster0-b3gd5.mongodb.net/
${process.env.MONGODB_ATLAS_DB}?retryWrites=true`,{ useNewUrlParser: true }).then((_) => {
    console.log('Connection to MongoDB was successful');
    server.listen(5000, console.log('Server is up!'));
}).catch((err) => {
    console.log(err);
});
