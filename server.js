const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
// App config
const App = express();
const PORT = process.env.PORT || 8000;
const connectionUrl = process.env.MONGO_URL
// todoRoutes
const todoRoute = require('./routes/todoRoute')
 

// middlewares
App.use(express.json());
App.use(cors());
// Db connection
mongoose.connect(connectionUrl)
        .then(() => {
            App.listen(PORT, () => {
                console.log(`listening at port ${PORT}`)
            })
            console.log('Connected to the data base')
        }).catch((error) => {
            console.error(error);
        })
// Api end-point
App.use('/listly/api/v1', todoRoute);
