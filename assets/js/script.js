var app = angular.module('testApp', []);

app.controller('carsCtrl', function($scope, $http) {
    $http.get('voiture.json').then(fucntion(response) {
      $scope.cars = response.data;
    });
});
