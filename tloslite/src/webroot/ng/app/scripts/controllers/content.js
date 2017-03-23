'use strict';


ContentController.$inject = ['ModalService'];

function ContentController(modalService) {

    // console.log("tloslite content");
    var self = this;

    $(document).ready(function() {
        $('#tlos-job-table').DataTable();
    });

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
