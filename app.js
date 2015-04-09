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


function showEmail(){
    $( ".email" ).css("font-size", "2em");
    $( ".contact-info" ).addClass("contact-info-hovered");
}

$( "footer" ).hover(
  function() {
        showEmail();
  }, function() {
    if($(document).width()>768) {
        $( ".email" ).css("font-size", "0");
        $( ".contact-info" ).removeClass("contact-info-hovered");
    }
  }
);
$("footer").focusin(function(){showEmail();});

$( ".contact-info" ).click(function() {
    showEmail();
});

