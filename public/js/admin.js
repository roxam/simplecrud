(function(){

    var admin = angular.module('articleAdmin',[]);

    admin.controller('ArticleAdminController',['$scope','$http','$sce',function($scope, $http, $sce){


        $http.get('/articles').then(function(printTerms){
            $scope.articleAdminData = printTerms.data;


        });
        

        $('form').submit(function (e) {
            e.preventDefault();
            $.post('/articles', {title: $('#title').val(), content: $('#content').val()}, $scope.printTerms);
            
            
        });

        // if any of the links are clicked on
        $('.content').delegate('.editLink', 'click', function () {
            var recordId = $(this).attr('value');
            var titleSpan = $(this).find('.titleSpan').html();
            var contentSpan = $(this).find('.contentSpan').html();
            
            // don't append the input if it's already there
            if($('#'+recordId+' > input').length < 1) {
                $('<input type="text" value="'+titleSpan+'"/>').appendTo('#'+recordId);
                $('<textarea>'+contentSpan+'</textarea>').appendTo('#'+recordId);
            }
        });



    }]);

})();