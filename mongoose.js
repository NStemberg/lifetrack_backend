mongoose = require('mongoose');

mongoose.connect('mongodb://cb_admin:passw0rd@ds249992.mlab.com:49992/cb-test');

const Entity = mongoose.model('Entity', {
    entity: String,
    values: [],
}, 'entities');

const Domain = mongoose.model('Domain', {
    domain: String,
}, 'domains');

const Intent = mongoose.model('Intent', {
    intent: String,
    domain: String,
    description: String,
    examples: [],
}, 'intents');

const Value = mongoose.model('Value', {
    value: String,
    synonyms: [],
}, 'values');

const Answer = mongoose.model('Answer', {
    domain: String,
    intent: String,
    entity: String,
    value: String,
    answerTextList: [],
    context: String,
    timestamp: Date,
    faq: String,
    userId: String,
}, 'answers');

const Post = mongoose.model('Post', {
    title: String,
    date: Date,
    content: String,
}, 'posts')

module.exports = {
    Entity: Entity,
    Intent: Intent,
    Value: Value,
    Answer: Answer,
    Domain: Domain,
};