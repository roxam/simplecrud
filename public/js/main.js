
(function(){

    var app = angular.module('articleApp',[]);

    app.controller('ArticleController',['$scope','$http','$sce',function($scope, $http, $sce){

        $http.get('/articles').then(function(printTerms){
            $scope.articleData = printTerms.data;
        });

    }]);

    

})();