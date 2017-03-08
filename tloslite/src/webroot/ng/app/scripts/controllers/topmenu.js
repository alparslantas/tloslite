'use strict';


function TopMenuController() {

  // console.log("tloslite top menu");
}

angular.module('tloslite').directive('tlosTopMenu', function() {
    return {
        restrict: 'E',
        replace: true,
        // link: function(scope, elem, attr) {},
        controller: TopMenuController,
        controllerAs: 'topMenuCtrl',
        templateUrl: 'app/views/topmenu.html'
    };
});
