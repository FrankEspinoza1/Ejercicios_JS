const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get('/',(req, res)=> {
    res.send('welcom to my api');
});

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to mongoDB Atlas'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));
