var app = angular.module('app', ['ui.grid', 'ui.grid.cellNav']);

app.controller('MainCtrl',  ['$scope', '$http', '$timeout', '$interval', 'Contents', function ($scope, $http, $timeout, $interval, Contents) {
  
  var data = Contents;
  $scope.gridOptions = {};
  
  $scope.gridOptions.columnDefs = [
    
    { name:'id', displayName: 'Id'},    
    { name:'name', displayName: 'Name'},
    { name:'phone', displayName: 'Phone'},
    { name:'address.city', displayName: 'City'},
    { name:'address.address_line1', displayName: 'Address 1'},
    { name:'address.address_line2', displayName: 'Address 2'},
    { name:'address.postal_code', displayName: 'Postal Code'}
  ];
  
  angular.forEach(data, function(obj) {
    if(isNaN(obj.phone)){
      obj.phone = "NA";
    }  
  });
  $scope.gridOptions.data = data;
  /*console.log(isNaN("Arush"));*/
}]);
