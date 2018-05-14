/*
	Map Controller
*/
angular
	.module('app')
	.controller('AppController', function(AppService, APP_CONFIG, $timeout ){
		
		var vm = this;

		vm.cities = ['Nuuk', 'Urubici', 'Nairobi']
		vm.places = [];
		vm.date = new Date();

		function getData(){
		
			AppService.getClimate(vm.cities)
				.then(function(response){
					vm.places = response;
					
					$timeout(function(){
						getData()
					}, APP_CONFIG.secondsToUpdate)

				})
		}

		vm.expand = function(item){
			angular.forEach(vm.places, function (currentItem) {
				currentItem.cardInformation = currentItem === item && !currentItem.cardInformation;
			});
		}

		getData();

	})