'use strict';


function ContentController() {

  // console.log("tloslite content");

  $(document).ready(function() {
    $('#example').DataTable();
} );
}

angular.module('tloslite').directive('tlosContent', function() {
    return {
        restrict: 'E',
        replace: true,
        controller: ContentController,
        controllerAs: 'contentCtrl',
        templateUrl: 'app/views/content.html'
    };
});
