'use strict'

function getVideoCode(videos){

    videos.forEach(function(v){
        if(v.link){
            var linkArray = v.link.split('/');
            v.update({video_code: "a"});
        }
    });
    return videos;
}

module.exports.getVideoCode = getVideoCode;