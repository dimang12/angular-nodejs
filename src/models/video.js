'use strict';

var mongoose = require("mongoose");

//var listSchema = new mongoose.Schema({
//    list_title: String,
//    list_number: Number,
//});
//
//var listModel = mongoose.model('lists', listSchema);

var videoSchema = new mongoose.Schema({
    title: String,
    unicode_title: String,
    description: String,
    link: String,
    thumb: String,
    viewed: Number,
    created_at: Date,
    updated_at: Date
    //list_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'lists'}]
});




var videoModel = mongoose.model('videos', videoSchema);

//module.exports = listModel;
module.exports = videoModel;
