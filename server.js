var express=require('express');
var app=express();

//set the port of application
//allow heroku to set it or set it to 8080
var port=process.env.PORT || 8080;

//set the view engine to ejs
app.set('view engine', 'ejs');

//tell express to look in teh public director for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

//set the hom page route
app.get('/', function(req, res){
    //ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function(){
    console.log('Dicaprio clock is running on http://localhost:' + port);
});