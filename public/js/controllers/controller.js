'use strict'
//call module
angular.module('iamkala')

    // Create main controller
    .controller('mainCtrl', function ($scope, dataService) {
        dataService.getVideos(function (res) {
            $scope.videos = res.data;
        })
    })
    .controller('PlayCtrl', function($scope,  $stateParams, dataService){
        dataService.getPlayingVideo($stateParams.id, function(res){
            $scope.playVideo = res.data;
            $scope.videoCode = $scope.playVideo.link;
        });

        console.log($stateParams.id);
    })
;
