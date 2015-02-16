function Ctrl($resource) {
	/*var app = angular.module("seedbanks", ["ngResource", "hateoas"]);
	
	app.config(function (HateoasInterceptorProvider) {
	    HateoasInterceptorProvider.transformAllResponses();
	});
	
	var item = $resource("harvest/:harvestId").get(null, function () {
		alert(item.toSource());
	    console.log("Here's a related $resource object: ", item.resource("variety"));
	});*/
	
	
	
	

	/*var harvestResource = $resource("/harvest/:harvestId");
	
	var harvest = harvestResource.query(null, function () {
	    var firstHarvest = harvest[0];
	    var firstHarvestVariety = new HateoasInterface(firstHarvest).resource("variety").query(null, function () {
	        console.log(firstHarvestVariety);
	    });
	});*/
}

/*
function varietyName($scope, $http, linkVariety) {
	$scope.varietyName = [];
	$http.get(linkVariety).then(function(variety){
		$scope.varietyName.push(variety.data["name"]);
	});
}

function Ctrl($scope, $http, $q) {
	
	function getResponse($q){                 
	    var temp = {};
	    var defer = $q.defer();
	    $http.get('http://localhost:8080/harvest/4/variety').success(function(data){
	            alert(data);
	            temp =data;
	            defer.resolve(data);
	    });
	    return defer.promise;
	}

	//alert(getResponse($q));
	var sb = angular.module('sb', ['ngResource']);
    $scope.list = [];
    $scope.text = '';
>>>>>>> d9957c00cf6a2c594a09331e92cf7fd71784d720
    $scope.submit = function () {
        if ($scope.text) {
    		$http.get('http://localhost:8080/harvest/search/findBySharedAndVarietyNameContainingIgnoringCase?shared=0&variety='+$scope.text).success(function(data){
    			try{
    				$scope.list = data["_embedded"]["harvest"];
    				for (elem of $scope.list) {
    					$scope.varietyNames = [];
    					$http.get(elem["_links"]["variety"]["href"]).then(function(variety){
    						alert(variety.data["name"]);
    						$scope.varietyNames.push(variety.data["name"]);
    					});
    					alert($scope.varietyNames.toSource());
    				}
    					
    			}catch(err){
    				alert(err)
    				$scope.list = [];
    			}
    		});
        	
            $scope.text = '';
        }
    };
    
    
    
}*/
