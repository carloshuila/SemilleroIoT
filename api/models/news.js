'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = Schema({
    name: String,
    description: String,
    image: String
});

module.exports = mongoose.model('News', newsSchema);