'use strict';

TopMenuController.$inject = ['ModalService'];

function TopMenuController(modalService) {
    var self = this;
    // console.log("tloslite top menu");

    self.openAboutModal = function() {
        modalService.aboutModal();
    }

    self.openSystemPropertiesModal = function() {
        modalService.systemPropertiesModal();
    }

    self.openScenerioFilesModal = function() {
        modalService.scenerioFilesModal();
    }

    self.openTlosLogModal = function() {
        modalService.tlosLogModal();
    }

    self.openSystemLogModal = function() {
        modalService.systemLogModal();
    }

    self.openSystemPropertiesModal = function() {
        modalService.systemPropertiesModal();
    }
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
