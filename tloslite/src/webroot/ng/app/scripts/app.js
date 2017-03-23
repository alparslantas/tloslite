(function() {

    'use strict';


    var app = angular.module('tloslite', [
        'pascalprecht.translate',
        'ui.bootstrap'
    ]);



    applicationConfig.$inject = ['$translateProvider', '$translatePartialLoaderProvider'];

    function applicationConfig($translateProvider, $translatePartialLoaderProvider, $uibModal) {

        var common_tr = {
            TITLE: 'Hoşgeldiniz!',
            MESSAGE: 'Türkçe desteği mevcut!'
        };

        var common_en = {
            TITLE: 'Welcome!',
            MESSAGE: 'This app supports your lanaguage!'
        }

        $translateProvider
            .translations('en', common_en)
            .translations('tr', common_tr)
            .preferredLanguage('en');

        // $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);


        // debugger; 
        // $uibModal.open();

    }

    app.config(applicationConfig);

})();
