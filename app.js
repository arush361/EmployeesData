var app = angular.module('app', ['ui.grid', 'ui.grid.cellNav']);

app.controller('MainCtrl',  ['$scope', '$http', '$timeout', '$interval', 'Contents', '$filter',
 function ($scope, $http, $timeout, $interval, Contents, $filter) {
  
  var data = Contents;
  $scope.gridOptions = {};
  
  angular.forEach(data, function(obj) {
    if(isNaN(obj.phone)){
      obj.phone = "NA";
    }  
  });

  
     $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function(gridApi){
          $scope.gridApi = gridApi;
          $scope.gridApi.grid.registerRowsProcessor( $scope.singleFilter, 200 );
      },
      columnDefs: [
          { field:'id', displayName: 'Id'},    
          { field:'name', displayName: 'Name'},
          { field:'phone', displayName: 'Phone'},
          { field:'address.city', displayName: 'City'},
          { field:'address.address_line1', displayName: 'Address 1'},
          { field:'address.address_line2', displayName: 'Address 2'},
          { field:'address.postal_code', displayName: 'Postal Code'}
      ]
    };

   $scope.gridOptions.data = data;

    $scope.filter = function() {
      $scope.gridApi.grid.refresh();
    };
      
    $scope.singleFilter = function( renderableRows ){
      var matcher = new RegExp($scope.filterValue);
      renderableRows.forEach( function( row ) {
        var match = false;
        [ 'name', 'city' ].forEach(function( field ){
          if ((field == "name") && (row.entity[field].match(matcher))){
            match = true;
          }
          else if((field == "city") && row.entity.address[field].match(matcher)) {
            match = true;
          }
        });
        if ( !match ){
          row.visible = false;
        }
      });
      return renderableRows;
    };

}]);

