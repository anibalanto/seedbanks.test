(function() {

	var sb = angular.module('sb', ['ngResource']);
	
	var host = '192.168.1.67';
	var fullhost = 'http://'+host+':8080';
	
	sb.controller('VarietyController', ['$http', function($http) {
		bank = this;
		bank.variedades = [];
		$http.get(fullhost+'/variety').success(function(data){
			bank.variedades = data["_embedded"]["variety"];
		});
		
	}]);
	
	// Buscar Harvest compartida por Variedad
	sb.controller('FindHarvestCtrl', ['$http', function($http) {
		bank = this;
		bank.cosechas = [];
		this.idvariedad = 2;
		$http.get(fullhost+'/harvest/search/findBySharedAndVariety\?shared=1\&variety='+this.idvariedad).success(function(data){
			bank.cosechas = data["_embedded"]["harvest"];
		});

	}]);
	
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

	
	// Probando RESOURCE!
	angular.module('sb.services').factory('Harvest', function($resource) {
		return $resource(fullhost+'/harvest/:id'); // Note the full endpoint address
	});
	
	sb.controller('HarvestResCtrl', function($scope, Harvest) {

		var harvests = Harvest.query(function() { 
			console.log(harvests);
		}); //query() returns all the entries
	
	});
	
		*/
	


	// Pruebas con Angular.
	gema = [{'price': '2.20', 'name': 'oro'},{'price': '3.2', 'name': 'platino'}];	
	sb.controller('TestCtrl', function(){
		this.objetos = gema;
	});

})();
