app.controller("myCtrl", function($scope) {
  
    $scope.primeiroNome = "John";
    $scope.changeName = function() {
        $scope.primeiroNome = "Nelly";
    }
});