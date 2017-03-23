ModalService.$inject = ['$http', '$uibModal'];

function ModalService($http, $uibModal) {
    var self = this;

    self.aboutModal = function(modalTextData) {

        $uibModal.open({
            templateUrl: 'app/views/templates/aboutModal.html',
            controllerAs: 'modalCtl',
            // controller: ['ModalService', function() {
            //     var that = this;
            //     that.modalTextData = modalTextData;
            // }]
        });
    }

    self.systemPropertiesModal = function(modalTextData) {
        $uibModal.open({
            templateUrl: 'app/views/templates/systemPropertiesModal.html',
            controllerAs: 'modalCtl',
        });
    }

    self.scenerioFilesModal = function(modalTextData) {
        $uibModal.open({
            templateUrl: 'app/views/templates/scenerioFilesModal.html',
            controllerAs: 'modalCtl',
        });
    }

    self.tlosLogModal = function(modalTextData) {
        $uibModal.open({
            templateUrl: 'app/views/templates/tlosLogModal.html',
            controllerAs: 'modalCtl',
        });
    }

    self.systemLogModal = function(modalTextData) {
        $uibModal.open({
            templateUrl: 'app/views/templates/systemLogModal.html',
            controllerAs: 'modalCtl',
        });
    }
    /*
        self.failureModal = function(rdata) {

            $uibModal.open({
                templateUrl: 'app/components/modal/failureModal.html',
                controllerAs: 'modalCtl',
                controller: ['ModalService', function() {
                    var that = this;
                    that.data = rdata;
                }]
            });
        };
        */
}
angular.module('tloslite').service('ModalService', ModalService);
