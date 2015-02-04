(function() {

	
	
	var sb = angular.module('sb', ['ngResource', "hateoas"]);
	
	
	sb.config(function (HateoasInterceptorProvider) {
	    HateoasInterceptorProvider.transformAllResponses();
	});
	
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
	sb.factory('Harvest',
		function($resource){
			return $resource('harvest/:id', {harvestid:'@id'}, {
				//'get': {method:'GET'},
				//'query': {method:'GET', params:{id:'harvests'}, isArray:false}
			});
	});

	sb.controller('HarvestResourceCtrl', ['$scope', 'Harvest', function($scope, Harvest) {
		var ctrl = this;
		this.queryResult = Harvest.get({},{'id': 1}, function (response) { 
			ctrl.harvests = response['_embedded']['harvest'];
		});
	}]);
	
	
	/*sb.controller('HarvestResourceCtrl', ['$scope', 'Harvest', function($scope, Harvest) {
		var ctrl = this;
		this.queryResult = Harvest.query(null, function (response) { 
			var firstHarvest = this.queryResult[0]; 
			var firstHarvestVariety =  new HateoasInterface(firstHarvest).resource("variety").query(null, function () {
				console.log(firstHarvestVariety);
			});
			
		});
	}]);*/
	
	
	// Pruebas con Angular.
	gema = [{'price': '2.20', 'name': 'oro'},{'price': '3.2', 'name': 'platino'}];	
	sb.controller('TestCtrl', function(){
		this.objetos = gema;
	});

})();
