'use strict';

angular.module('iamkala')
    .service('dataService', function ($http, $q) {
        this.getVideos = function (res) {
            // $http.get('/mocks/videos.json').then(res);
            $http.get('/api/videos/recently').then(res);
        },

        this.getPlayingVideo = function(id, res){
            $http.get('/api/videos/playing',{params: {id: id}}).then(res);
        }
    })
;