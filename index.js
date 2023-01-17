const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const db = require('./config/databaseConnection');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', require('./routes'));

app.listen(PORT, (err) => {
    if(err){
        console.log('Error in creating express server ', err);
        return;
    }
    console.log('Express is successfully running on PORT:', PORT);
    return;
});