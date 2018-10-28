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

app.get('/posts', function(req, res) {
    models.Post.find((err, posts) => {
        res.json(posts);
    })
});

app.post('/posts', function(req, res) {
    models.Post.create(req.body.post,() => {
        models.Post.find((err, posts) => {
            res.json(posts);
        })
    })
});

app.post('/posts/:postId', function(req, res) {
    models.Post.updateOne({ _id: req.params.postId }, req.body.post,() => {
        models.Post.find((err, posts) => {
            res.json(posts);
        })
    })
});


server.listen(port);

