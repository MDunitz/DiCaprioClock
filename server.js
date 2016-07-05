var express=require('express');
var app=express();

//set the port of application
//allow heroku to set it or set it to 8080
var port=process.env.PORT || 8080;

//set the view engine to ejs

//tell express to look in teh public director for assets (css/js/img)
console.log(__dirname + '/public');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));

//set the hom page route


app.listen(port, function(){
    console.log('Dicaprio clock is running on http://localhost:' + port);
});