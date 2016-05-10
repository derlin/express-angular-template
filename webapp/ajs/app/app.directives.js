(function(){

    angular.module( 'app' )
        .directive( 'myDirective', myDirective );


    function myDirective(){
        return {
            restrict: 'A',
            link    : function( scope, element, attrs ){
                // do stuff
            }
        };
    }

})();