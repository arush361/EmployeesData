app.controller('addEmpCtrl',  ['$scope', '$modalInstance', '$log', '$http',
 function ($scope, $modalInstance, $log, $http) {
      var empData = [];

      $scope.addEmployee = function (name,phone,city,addr1,addr2,postalCd) {
          console.log("user = ", name);
          empData ={
            "name" : name,
            "phone" : phone,
            "city" : city,
            "address_line1" : addr1,
            "address_line2" : addr2,
            "postal_code" : postalCd
          };
           $http.post('some/url', empData).success(function(data, status, headers, config) {
              $scope.status = status;
              $scope.editedEvent = data;
              $modalInstance.dismiss('cancel'); 
            }).error(function(data, status, headers, config) {
              console.log("error : ", status);
              $modalInstance.dismiss('cancel'); 
            });
          $log.log('Submiting user info.'); 
          

      }
      $scope.cancel = function () {
          $modalInstance.dismiss('cancel'); 
      };
}]);

