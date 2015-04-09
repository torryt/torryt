'use strict';

angular.module('app.intro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/intro.html',
    controller: 'IntroCtrl'
  });
}])

.controller('IntroCtrl', [function() {
    
    angular.element(document).ready(function () {
        $('.feature-list-item').each(function(i) {
            // $(this).addClass("fadein");
            var self = this;
            setTimeout(function(){
                $(self).addClass("fadein");
            }, 400*i);
        })
    });

}]);