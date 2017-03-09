'use strict';


ContentController.$inject = ['$translate'];

function ContentController($translate) {

  // console.log("tloslite content");
  var self = this;

  self.language = 'en';
  self.languages = ['en', 'tr'];

  self.updateLanguage = function() {
    $translate.use(self.language);
  };


  $(document).ready(function() {
    $('#tlos-job-table').DataTable();
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
