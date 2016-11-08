'use strict';

var mongoose = require("mongoose");

var listSchema = new mongoose.Schema({
    list_title: String,
    list_number: Number,
});

var listModel = mongoose.model('lists', listSchema);

module.exports = listModel;