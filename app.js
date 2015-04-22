'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'app.intro',
  'app.about',
  'app.portfolio'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

app.controller('AppController', ['$scope', function($scope) {
  $scope.navbarCollapsed = true;
}]);

app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});