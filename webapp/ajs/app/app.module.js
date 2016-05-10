/*
 * @author   Lucy Linder <lucy.derlin@gmail.com>
 * @date     February 2016
 * @context  BBData
 *
 * Copyright 2016 HEIAFR. All rights reserved.
 * Use of this source code is governed by an Apache 2 license
 * that can be found in the LICENSE file.
 */
(function () {

    /**
     * @ngdoc overview
     * @name app
     * @description

     *
     * @author Lucy Linder
     * @date   May 2016
     * @context  template example
     */
    var webapp = angular.module('app',
        // dependencies
        [
            'ngAnimate',
            'ngRoute'
        ]);

    /*

    // == example of route configuration ==

    webapp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/something', {
                    templateUrl: 'path/to/_content.html',
                    controller: 'SomethingController',
                    controllerAs: 'ctrl'
                }).
                otherwise({
                    redirectTo: '/',
                    templateUrl: 'html/_main.html',
                    controller: 'MainController',
                    controllerAs: 'ctrl'
                });
        }]);

    */

}());