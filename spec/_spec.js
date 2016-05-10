describe('articleApp', function () {
        
    beforeEach(angular.mock.module('articleApp'));
    var $controller;
    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;
    }));

    describe('article data', function () {
        it('should demonstrate using when (200 status)', inject(function($http) {
              var $scope = {};

              /* Check that a mock http server is running */
              $http.get('http://localhost:3000/articles')
                .success(function(data, status, headers, config) {
                  $scope.valid = true;
                  $scope.response = data;
                  console.log(data);
                })
                .error(function(data, status, headers, config) {
                  $scope.valid = false;
              });
              /* End */

              inject(function($injector) {
                $httpBackend = $injector.get('$httpBackend');
              });

              /* 
              Run the mock http server using httpBackend
              Send fake result 
              */
              $httpBackend
                .when('GET', 'http://localhost:3000/articles')
                .respond(200, { foo: 'bar' });

              $httpBackend.flush();

              /* expect fake result */
              expect($scope.valid).toBe(true);
              expect($scope.response).toEqual({ foo: 'bar' });
        }));
    });

});