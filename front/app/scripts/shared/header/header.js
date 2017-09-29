(function () {

    'use strict';

    angular.module('frontApp')
        .directive('appHeader', appHeader);

    function appHeader() {
        return {
            replace: true,
            restrict: 'E',
            scope: {},
            templateUrl: 'scripts/shared/header/header.html'
        };
    }
}());