(function() {

	var sb = angular.module('sb', []);
	
	sb.controller('VarietyController', ['$http', function($http) {
		bank = this;
		bank.variedades = [];
		$http.get('http://localhost:8080/variety').success(function(data){
			bank.variedades = data["_embedded"]["variety"];
		});
		
	}]);
	
	
	// Ver
	sb.controller('HarvestController', ['$http', function($http) {
		this.allHarvest = function(){
			bank = this;
			bank.harvests = [];
			$http.get('http://localhost:8080/harvest').success(function(data){
				bank.harvests = data["_embedded"]["harvest"];
			});
			return bank.harvests;
		};
		
		this.cosechas = this.allHarvest();

	}]);


	// Pruebas con Angular.
	gema = [{'price': '2.20', 'name': 'oro'},{'price': '3.2', 'name': 'platino'}];	
	sb.controller('TestCtrl', function(){
		this.objetos = gema;
	});

})();
