/*
	Map Services
*/

angular
	.module('app')
	.factory('AppService', function($http, $q,  $sce, APP_CONFIG){

		var urlData = "http://api.openweathermap.org/data/2.5/weather?";
		var SAVE_DATA = "CONTAZUL_DATA_SAVE";

		var getClimate = function(cities){
			
			if(cities == undefined){				
				return $q.reject();
			}else{

				var queries = [];

				for(var i = 0; i < cities.length; i++ ){
					
					var url = urlData + 'q=' + cities[i] + '&appid=' + APP_CONFIG.keyApp;
					url = $sce.trustAsResourceUrl(url);

					var request = $http.jsonp(urlData + 'q=' + cities[i] + '&appid=' + APP_CONFIG.keyApp);
					queries.push(request);  
				}

				return $q.all(queries)
							.then(function(data){
							
								return data;
							})
							.then(function(err){
							
								return err;
							})

			}
			
		}

		var saveData = function(data){
			window.localStorage.setItem(SAVE_DATA, JSON.stringify(data));
		}

		var getData = function(){
			var result = JSON.parse(window.localStorage.getItem(SAVE_DATA));

			console.log(result);
			return result;
		}

		return {
			getClimate: getClimate,
			saveData: saveData,
			getData: getData
		}
	})