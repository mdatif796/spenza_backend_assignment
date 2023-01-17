const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const db = require('./config/databaseConnection');

app.listen(PORT, (err) => {
    if(err){
        console.log('Error in creating express server ', err);
        return;
    }
    console.log('Express is successfully running on PORT:', PORT);
    return;
});