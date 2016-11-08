'use strict';

angular.module('iamkala')
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home/');

    $stateProvider

    // HOME STATES AND NESTED VIEWS
        .state('home', {
            url: '/home',
            templateUrl: 'views/common/content.html'
        })

        .state('home.main', {
            url: "/",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' }
        })

        // Config video modules
        .state('videos', {
            url: '/videos',
            templateUrl: 'views/common/content.html'
        })

        .state('videos.all', {
            url: "/all",
            templateUrl: "views/video.html",
            data: { pageTitle: 'All movies' }
        })

        .state('videos.play', {
            url: "/play/:id",
            templateUrl: "views/movie/play.html",
            controller: 'PlayCtrl',
            data: {pageTitle: 'Play Movie'}
        })
    ;

});

