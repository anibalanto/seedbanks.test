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
		ctrl1.queryResult1 = HarvestByVarietyName.get({variety:'beren'}, function (response) {
			ctrl1.harvestsByName = response['_embedded']['harvest'];
			//console.log(ctrl1.harvestsByName.toSource());
		});
	}]);
	
	sb.factory('Variety',
		function($resource){
			return $resource('variety/:id', {id:'@id'}, {
			});
	});

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
	

	sb.controller('newHarvestCtrl', ['$scope', 'Harvest', 'Variety', function($scope, Harvest, Variety) {
		
		var bank = this;
		this.queryResult = Variety.get(null, function (response) { 
			bank.varieties = response['_embedded']['variety'];
		});

		var newHarvest = new Harvest();
		$scope.farmer = 'farmer/FFAAEE44';
		$scope.mother = 'harvest/3';
		$scope.variety = 'variety/DAFA3555';
		$scope.shared = 'false';
		
		$scope.submit = function(Harvest) {
			newHarvest.farmer = $scope.farmer;
			newHarvest.mother = $scope.mother;
			newHarvest.variety = $scope.variety;
			newHarvest.shared = $scope.shared;
			console.log(newHarvest.toSource());
			newHarvest.$save();
		}

	}]);

	sb.factory('Interchange',
		function($resource){
			return $resource('interchange/:id', {id:'@id'}, {
				//'query': {method:'GET', null, isArray:false},
				'actualizar': {params:{id:'@id'}, method:'PATCH'}
			});
	});

	// CU 3. Crear un Interchange con datos de Farmer y Harvest. 
	sb.controller('newInterchangeCtrl', ['$http', '$scope', 'Interchange', 'HarvestByVarietyName', 'Variety', function($http, $scope, Interchange, HarvestByVarietyName, Variety) {
		
		$scope.variety = "ber";
		
		$scope.dd = {};		
		$scope.init = function(id, urlFarmer, urlVariety)
				{
					$scope.dd[id] = {};
					$http.get(urlFarmer).success(function(data){
						//console.log(data.toSource());
						$scope.dd[id].firstName = data['firstName'];
						$scope.dd[id].surname = data['surname'];
						$scope.dd[id].reliability = data['reliability'];
					});
					$http.get(urlVariety).success(function(data){
						//console.log(data.toSource());
						$scope.dd[id].varietyName = data['name'];
					});
				};

		var ctrl2 = this
		$scope.varietyChange = function() {
			ctrl2.queryResult1 = HarvestByVarietyName.get({variety:$scope.variety}, function (response) {
				ctrl2.harvestsByName = response['_embedded']['harvest'];
				for(harvItem of ctrl2.harvestsByName){
					variety = harvItem['_links']['variety'];
					//console.log("url: " + variety.toSource());
					//variety.name = "berenjena2";
					$http.get(variety['href']).success(function(data){
						
						//name = data['name']
						//console.log("varietyName: " + name);
						//console.log("variety: " + variety.toSource());
						//console.log("harvestItem: " + harvItem.toSource());
						
					});
					//console.log("harvests: " + ctrl2.harvestsByName.toSource());
				}
			});
		}

		var ctrl1 = this;
		ctrl1.queryResult1 = HarvestByVarietyName.get({variety:$scope.variety}, function (response) {
			ctrl1.harvestsByName = response['_embedded']['harvest'];
		});
		
		// Interchange main columns: farmer_receptor_uFarmerID, score, harvest_id
		var newInter = new Interchange();
		$scope.farmerReceptor = 'farmer/FFAAEE44';
		//$scope.harvest = 'http://localhost:8080/harvest/3';
		$scope.score = '10';

		$scope.submit = function(Harvest) {
			newInter.farmerReceptor = $scope.farmerReceptor;
			newInter.harvest = $scope.harvest;
			newInter.score = $scope.score;
			newInter.$save();	
		}
	}]);


	sb.controller('dataFarmerInterchangeCtrl', ['$http', '$scope', 'Interchange', 'HarvestByVarietyName', 'Variety', function($http, $scope, Interchange, HarvestByVarietyName, Variety) {

		$scope.init = function(url)
				{
					console.log("init");
					$http.get(url).success(function(data){
						console.log(data.toSource());
					});
					
				};
		//console.log("en dataFarmer... : "+$scope.id);
		//console.log("en dataFarmer... : "+$scope.name);
		
	}]);

	sb.factory('Farmer',
		function($resource){
			return $resource('farmer/:id', {id:'@id'}, {
				//'query': {method:'GET', null, isArray:false},
				'actualizar': {params:{id:'@id'}, method:'PATCH'}
			});
	});

	sb.controller('FarmerCtrl', ['$scope', 'Farmer', function($scope, Farmer) {
		var ctrl = this;
		this.queryResult = Farmer.get(null, function (response) { 
			ctrl.farmers = response['_embedded']['farmer'];
			//console.log(ctrl.harvests.toSource());
		});
	}]);
	
	
	sb.controller('DefaultCtrl', ['$scope', function($scope) {
		$scope.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];
	}]);
	
})();
