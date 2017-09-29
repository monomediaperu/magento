(function () {

    'use strict';

    angular.module('frontApp')
        .config(appRoutes);

    function appRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $stateProvider
            .state('main', {
                abstract: true,
                template: '<ui-view></ui-view>'
            })
            .state('main.Home', {
                url: '/',
                templateUrl: 'scripts/views/home/home.html'
            })
            .state('main.Prices', {
                url: '/precios',
                templateUrl: 'scripts/views/prices/prices.html'
            })
            .state('main.About', {
                url: '/nosotros',
                templateUrl: 'scripts/views/about/about.html'
            });
    }

}());