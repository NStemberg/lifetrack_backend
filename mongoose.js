mongoose = require('mongoose');

mongoose.connect('mongodb://cb_admin:passw0rd@ds249992.mlab.com:49992/cb-test');

const Post = mongoose.model('Post', {
    title: String,
    date: String,
    content: String,
    lat: String,
    lng: String,
    comments: [],
}, 'posts')

module.exports = {
    Post: Post,
};