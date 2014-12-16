(function() {

	var sb = angular.module('sb', ['ngResource']);
	
	var host = '192.168.1.34';
	var fullhost = 'http://'+host+':8080';
	
	sb.controller('VarietyController', ['$http', function($http) {
		bank = this;
		bank.variedades = [];
		$http.get(fullhost+'/variety').success(function(data){
			bank.variedades = data["_embedded"]["variety"];
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
