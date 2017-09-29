(function () {

    'use strict';

    angular.module('frontApp')
        .directive('appFooter', appFooter);

    function appFooter() {
        return {
            replace: true,
            restrict: 'E',
            scope: {},
            templateUrl: 'scripts/shared/footer/footer.html'
        }
    }

}());