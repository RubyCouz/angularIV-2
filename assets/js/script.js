var app = angular.module('testApp', []);

app.controller('carsCtrl', function($scope) {
    $scope.cars = [
        {'brand': 'Renault',  'color': 'verte'},
        {'brand': 'Citroen', 'color': 'grise'},
        {'brand': 'Opel',  'color': 'or'},
        {'brand': 'Ferrari', 'color': 'rouge'},
        {'brand': 'Peugeot', 'color': 'bleu'},
        {'brand': 'Nissan', 'color': 'verte'},
    ];
});
