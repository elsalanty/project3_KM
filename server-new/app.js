const express = require('express');
const bodyParser = require('body-parser');
const routes= require('./routes/routes');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/googlequiz',
            {useNewUrlParser:true,useUnifiedTopology:true}).then(res=>{
                console.log('mongodb connected')
});

app.use(bodyParser.json());

routes(app);

module.exports = app;