/*
 * @author   Lucy Linder <lucy.derlin@gmail.com>
 * @date     May 2016
 * @context  BBData
 *
 * Copyright 2016 HEIAFR. All rights reserved.
 * Use of this source code is governed by an Apache 2 license
 * that can be found in the LICENSE file.
 */
(function(){

    /**
     * @ngdoc service
     * @name bbdata.rest.RestService
     * @description
     * Service to talk to the backend.
     */
    angular
        .module( 'rest' )
        .factory( 'RestService', RestService );

    // --------------------------

    function RestService( $resource, baseUrl ){

        return $resource( '', {}, {

            getTest: {
                method : 'GET',
                url    : baseUrl + 'something',
                isArray: true
            },

            postTest: {
                method : 'POST',
                url    : baseUrl + '/test',
                isArray: false
            }


            ///**
            // * @ngdoc
            // * @name infos
            // * @methodOf thymioCaptain.rest.RestService
            // *
            // * @description
            // * Returns information based on the cookie.
            // *
            // * @returns {httpPromise} resolves with the object {cardId: "", isadmin: bool}, or fails with error
            // * description.
            // */
            //infos: {method: 'GET', url: baseUrl + 'info'},

        } )
    }

}());