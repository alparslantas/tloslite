'use strict';


HeaderController.$inject = ['$translate', '$translatePartialLoader'];

function HeaderController($translate, $translatePartialLoader) {

    // console.log("tloslite top menu");
    var self = this;

    // self.language = 'en';

    self.languages = [{
        code: "en",
        value: "English"
    }, {
        code: 'tr',
        value: "Türkçe"
    }];

    self.changeLanguage = function(lang) {
        $translate.use(lang);
    };


    // $translatePartialLoader.addPart('common');
    // $translate.refresh();



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
