'use restrict';

/**
 * Require modules or files
 */
// Create instance of express module
var express = require('express');
var Videos = require('../models/video.js');
var lib = require('../lib');
// var Lists = require('../models/list.js');


// Create router to set default namespace
var router = express.Router();

router.get('/videos/recently', function (req, res, next) {

    // console.dir(req.params);
    // response json format to client
    Videos.find({},function (err, videos){
        if(err){
            return res.status(500).json( {message:err.message} );
        }


        res.json( videos );
    });
});

router.get('/videos/playing', function(req, res){
    console.dir(req.query);
    Videos.findOne({'_id':req.query.id}, function(err, video){
        if(err){
            return res.status(500).json({message:err.message});
        }
        //console.dir(video)
        res.json(video);
    });
});


module.exports = router;
