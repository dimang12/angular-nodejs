// Connect to a MongoDB server provisioned over at
// MongoLab.  See the README for more info.
//
var mongodb = require('mongodb');
var nconf = require('nconf');

// read in keys and secrets.  You can store these in a variety of ways.
// I like to use a keys.json  file that is in the .gitignore file,
// but you can also store them in environment variables
nconf.argv().env().file('key.json');



// [START client]
var uri = 'mongodb://' +
    nconf.get('mongoUser') + ':' +
    nconf.get('mongoPass') + '@' +
    nconf.get('mongoHost') + ':' +
    nconf.get('mongoPort');

if (nconf.get('mongoDatabase')) {
    uri = uri + '/' + nconf.get('mongoDatabase');
}

var mongoose = require('mongoose');

mongoose.connect(uri, function (err) {
    if(err){
        console.log('MongoDB Connection is fail!')
    }else{
        console.log('MongoDb connection is good');
    }
});

