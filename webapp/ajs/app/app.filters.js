/*
 * @author   Lucy Linder <lucy.derlin@gmail.com>
 * @date     February 2016
 * @context  BBData
 *
 * Copyright 2016 HEIAFR. All rights reserved.
 * Use of this source code is governed by an Apache 2 license
 * that can be found in the LICENSE file.
 */
(function(){

    angular
        .module( 'app' )
        /**
         * @ngdoc filter
         * @name app.filterExample
         *
         * @description
         * Main controller
         */
        .filter( 'selected', filterExample );


    function filterExample( ){
        return function( input ){
            // filter your inputs here
            return input;
        };
    }
})();
