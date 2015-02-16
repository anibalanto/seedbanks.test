function Ctrl($scope, $http) {
	//var sb = angular.module('sb', ['ngResource']);
    $scope.list = [];
    $scope.text = 'ber';
    $scope.submit = function () {
        if ($scope.text) {
    		$http.get('http://localhost:8080/harvest/search/findBySharedAndVarietyNameContainingIgnoringCase?shared=0&variety='+$scope.text).success(function(data){
    			if (data == { } )
    				$scope.list = [];
    			else
    				$scope.list = data["_embedded"]["harvest"];
    		});
        	
            $scope.text = '';
        }
    };
}