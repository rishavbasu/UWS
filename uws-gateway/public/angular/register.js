var registerApp = angular.module("RegistrationApp", []);
registerApp.controller("RegisterController", RegisterController);

function RegisterController($scope, $http) {

	$scope.data = {};

	$scope.submit = function() {
		console.log($scope.data);
		$http.post('/register/', $scope.data).success(function(data) {
			window.location.href = data.redirect;
		});
	}
}