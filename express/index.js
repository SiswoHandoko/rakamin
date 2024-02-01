const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("Hello World!");
});

// ROUTE
app.get('/hello',function(req,res){
    res.send("Hello World 2!");
})

app.post('/hello',function(req,res){
    res.send("ini method Post Hello World 2!");
})

app.listen(3000);