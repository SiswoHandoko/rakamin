const express = require('express');
const app = express();

app.get('/dynamic/:name/:id', function(req,res){
    res.send("Hello! " + req.params.name + ", your id is: "+ req.params.id);
});

app.listen(3002)