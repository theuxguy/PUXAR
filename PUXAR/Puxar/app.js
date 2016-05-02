
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , routes =require('./routes/index')
  , http = require('http')
  , path = require('path')
  , mysql=require('mysql');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000); //set port
app.set('views', __dirname + '/views');
app.set('view engine', 'jade'); //could be html
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'))); //used to separate static from server
routes(app); //route to index

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

