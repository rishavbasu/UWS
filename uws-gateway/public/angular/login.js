var loginApp = angular.module("loginApp", []);
loginApp.controller("loginController", LoginController);

function LoginController($scope, $http) {

	$scope.data = {};

	$scope.submit = function() {
		$http.post('/login/validate', $scope.data).success(function(data) {
			window.location.href = data.redirect;
		});
	}
}