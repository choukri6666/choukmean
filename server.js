var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var social = require('./app/passport/passport')(app, passport);

var appRoutes = require('./app/routes/api')(router);

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);

//http://localhost:8000//api/users


mongoose.connect('mongodb://admin:chatbot1@ds111192.mlab.com:11192/kyo-bot', function(err) {
    if(err){
        console.log('Not connected to database: ' + err);
        
    }else{
        console.log('Successfully connected to MongoDB');
    }
});


app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname + '/public', 'app/views/index.html'));
});


app.listen(port, function(){
    console.log('Running server on port ' + port);
}); 