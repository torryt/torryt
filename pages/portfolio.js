'use strict';

angular.module('app.portfolio', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'pages/portfolio.html',
    controller: 'PortfolioCtrl'
  });
}])

.controller('PortfolioCtrl', ['$scope', '$modal', function($scope, $modal) {
    $scope.portfolio = [
    {
        title:      "Tillskuddsoversikt, Utdanningsdirektoratet",
        desc:       "Som sommeransatt i Bekk Consulting har jeg vært med på utvikle en offentlig tilskuddsoversikt for Utdanningsdirektoratet.", 
        thumbnail:  "img/udir-viz250x250.png",
        image:      "img/udir-viz.png",
        link:       "http://viz.udir.no/"
    }
    ];
}]);