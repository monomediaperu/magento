(function () {

    'use strict';

    angular.module('frontApp')
        .directive('appColorsBar', appColorsBar);

    function appColorsBar() {
        return {
            replace: true,
            restrict: 'E',
            scope: {},
            templateUrl: 'scripts/shared/colorsBar/colorsBar.html'
        }
    }
}());