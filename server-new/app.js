const express = require('express');
const bodyParser = require('body-parser');
const routes= require('./routes/routes');
const mongoose = require('mongoose');

const app = express();

app.use(express.static(path.join(__dirname,"../client-template-new/build")))

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/googlequiz',
            {useNewUrlParser:true,useUnifiedTopology:true}).then(res=>{
                console.log('mongodb connected')
});

app.use(bodyParser.json());

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../client-template-new/build/index.html"))
})

routes(app);

module.exports = app;