(function () {

    'use strict';

    angular.module('frontApp')
        .run(appRun);

    function appRun($transitions) {
        $transitions.onStart({}, function (trans) {
            trans.promise.finally(
                function () {
                    angular.element('body, html').animate({
                        scrollTop: 0
                    }, 300);
                }
            );
        });
    }

}());