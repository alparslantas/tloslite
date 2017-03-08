'use strict';


function HeaderController() {

  // console.log("tloslite top menu");
}

angular.module('tloslite').directive('tlosHeader', function() {
    return {
        restrict: 'E',
        replace: true,
        // link: function(scope, elem, attr) {},
        controller: HeaderController,
        controllerAs: 'headerCtrl',
        templateUrl: 'app/views/header.html'
    };
});
