'use strict';

angular.module('iamkala')
    .directive('videoBox', function(){
        return {
            templateUrl: 'views/templates/video-box.html',
            replace: true,
            controller: 'mainCtrl'
        }
    })
        

    // Top menu on video page
    .directive('videoTopMenu', function () {
        return {
            templateUrl: 'views/movie/top_menu.html',
            replace: true,
            controller: 'mainCtrl'
        }
    })


;