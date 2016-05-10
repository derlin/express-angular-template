/*
 * @author   Lucy Linder <lucy.derlin@gmail.com>
 * @date     February 2016
 * @context  template example
 */
(function(){

    /**
     * @ngdoc controller
     * @name app.MainCtrl
     *
     * @description
     * Main controller
     */
    angular
        .module( 'app' )
        .controller( 'MainCtrl', ctrl );

    // --------------------------

    function ctrl( $scope ){

        var self = this;

        self.test = "it works!";

        _init();

        /* *****************************************************************
         * implementation
         * ****************************************************************/

        //##------------init

        function _init(){
           // TODO
        }


        //##------------available methods



        //##------------utils

        function _handleError( error ){
            console.log( error );
        }

    }
})();