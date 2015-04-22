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


    var showEmail = function (){
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

}]);