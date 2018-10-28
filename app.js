/** App initializing and imports */

var express = require('express');
var bodyParser = require('body-parser');
var models = require('./mongoose.js');
var app = express();
var server = require('http').Server(app);

var port = process.env.PORT || 3000;

// ----------------------------------------------------------------------------------------------------

/** Middleware configuration */

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// -----------------------------------------------------------------------------------------------------

app.get('', function(req, res) {
    res.json({ text: 'Hello World!'});
});


server.listen(port);

