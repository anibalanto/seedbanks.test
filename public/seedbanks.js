(function() {

	var sb = angular.module('sb', ['ngResource']);
	
	/*sb.config(function (HateoasInterceptorProvider) {
	    HateoasInterceptorProvider.transformAllResponses();
	});*/

	sb.config(['$httpProvider', function($httpProvider) {
    	$httpProvider.defaults.headers.patch = {
        	'Content-Type': 'application/json;charset=utf-8'
    	}
	}])
	
	var host = 'localhost';
	var fullhost = 'http://'+host+':8080';
	
	sb.controller('VarietyController', ['$http', function($http) {
		bank = this;
		bank.variedades = [];
		$http.get(fullhost+'/harvest/search/findBySharedAndVarietyNameContainingIgnoringCase?shared=0&variety=beren').success(function(data){
			bank.variedades = data["_embedded"]["harvest"];
		});
		
	}]);
	
	// Buscar Harvest compartida por Variedad
	/*
	sb.controller('FindHarvestCtrl', ['$http', function($http) {
		bank = this;
		bank.cosechas = [];
		this.idvariedad = 2;
		$http.get(fullhost+'/harvest/search/findBySharedAndVariety\?shared=1\&variety='+this.idvariedad).success(function(data){
			bank.cosechas = data["_embedded"]["harvest"];
		});

	}]);
	*/
	
	// Buscar Harvest compartida por Variedad
	sb.controller('FindHarvestCtrl2', ['$http', function($http) {
		bank = this;
		bank.cosechas = [];
		this.idvariedad = 1;
		this.query = 1;
		this.queryFarmer = "/harvest/" + this.query + "/farmer";
		$http.get(fullhost+'/harvest').success(function(data){
			bank.cosechas = data["_embedded"]["harvest"];
		});

	}]);
	
	
	/*/ Ver
	sb.controller('HarvestController', ['$http', function($http) {
		
		this.allHarvest = function(){
			bank = this;
			bank.harvests = [];
			$http.get(fullhost+'/harvest').success(function(data){
				bank.harvests = data["_embedded"]["harvest"];
			});
			return bank.harvests;
		};
		
		this.cosechas = this.allHarvest();

	}]);
		
	*/
	
	
	//** Desarrollo con ngResource **//
	// HARVEST
	//  id (Not null), code_validator, date, shared, farmer_uFarmerID, mother_id, variety_uVarietyID
	
	sb.factory('HarvestByVarietyName',
			function($resource){
				return $resource('harvest/search/:verb', {verb:'findBySharedAndVarietyNameContainingIgnoringCase', variety:'@variety', shared:'1'}, {
				});
	});
	
	sb.controller('HarvestByVarietyNameResource', ['$scope', 'HarvestByVarietyName', function($scope, HarvestByVarietyName) {
		var ctrl1 = this;
		ctrl1.queryResult1 = HarvestByVarietyName.get({variety:"beren"}, function (response) {
			ctrl1.harvestsByName = response['_embedded']['harvest'];
			console.log(ctrl1.harvestsByName.toSource());
		});
	}]);
	
	
	sb.factory('Harvest',
		function($resource){

			return $resource('harvest/:id', {id:'@id'}, {
				//'query': {method:'GET', null, isArray:false},
				'actualizar': {params:{id:'@id'}, method:'PATCH'}
			});
	});
	
		
	sb.controller('HarvestResourceCtrl', ['$scope', 'Harvest', function($scope, Harvest) {
		var ctrl = this;
		this.queryResult = Harvest.get(null, function (response) { 
			ctrl.harvests = response['_embedded']['harvest'];
			//console.log(ctrl.harvests.toSource());
		});
	}]);

	sb.controller('HarvestNewResource', ['$scope', 'Harvest', function($scope, Harvest) {
		var newHarvest = new Harvest();
		newHarvest.farmer = 'farmer/FFAAEE44';
		newHarvest.mother = 'harvest/4';
		newHarvest.variety = 'variety/DAFA3555';
		newHarvest.$save();
	}]);

	// Algo asi: curl -i -X PATCH -H "Content-Type:application/json" -d '{ "shared" : "true" }' http://localhost:8080/harvest/AABBCCEE
	sb.controller('HarvestUpdateResource',  ['$scope', 'Harvest', function($scope, Harvest) {
		var newHarvest = new Harvest({id: 5});
		newHarvest.shared = 'true';
		newHarvest.farmer = 'farmer/FFAAEE44';
		newHarvest.$actualizar();
	}]);

	sb.controller('HarvestDeleteResource',  ['$scope', 'Harvest', function($scope, Harvest) {
		var newHarvest = new Harvest({id: 3});
		newHarvest.$delete();
	}]);
	

	
	
	
	/*sb.controller('HarvestByVarietyNameResource2',  ['$scope', 'HarvestByVarieytName', function($scope, HarvestByVarieytName) {
		var newHarvest = new HarvestByVarieytName({variety: 'beren'});
		console(newHarv)
	}]);*/


})();
