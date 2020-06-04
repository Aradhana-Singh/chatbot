var express  = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

app.get('/' , function(req,res){
    res.send("I am a bot");
});




app.listen(process.env.PORT || 5500, function(){
    console.log("Server started .....");
});