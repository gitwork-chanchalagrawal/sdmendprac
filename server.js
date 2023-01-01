var express = require ('express');
var app = express();

app.get('/',function(req,res){
    var person={firstname:'chanchal',lastname:'agrawal',age:'25'};
    res.send(person);

});

var server =app.listen(9000);
