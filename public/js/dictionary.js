
(function(){

    var app = angular.module('articleApp',[]);

    app.controller('ArticleController',['$scope','$http','$sce',function($scope, $http, $sce){


        $http.get('/articles').then(function(printTerms){
            $scope.articleData = printTerms.data;


        });

        /*$scope.printTerms = function (terms) {
            $('article').empty();

            $.each(terms, function () {
                $('<h2>').text(this.title).appendTo('article');
                $('<p>').text(this.content).appendTo('article');
            });
            
        };*/

    }]);

})();