'use strict';


function FooterController() {

  // console.log("tloslite top menu");
}

angular.module('tloslite').directive('tlosFooter', function() {
    return {
        restrict: 'E',
        replace: true,
        // link: function(scope, elem, attr) {},
        controller: FooterController,
        controllerAs: 'footerCtrl',
        templateUrl: 'app/views/footer.html'
    };
});
