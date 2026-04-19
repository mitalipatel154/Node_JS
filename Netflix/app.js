const express = require('express');

const port = 9000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded());

app.use(express.static('public'));

app.get('/',(req , res) =>{
    res.render('index');
})

app.listen(port,(err) => {
    if(err){
        console.log("Error to Start Server......");        
    }
    else{
        console.log(`Server running at http://localhost:${port}`)
    }
});