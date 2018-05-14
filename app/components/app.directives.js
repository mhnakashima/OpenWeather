/*
	Map Directivies
*/

angular
	.module('app')
	.directive('acButton', function(mapService){
		return{
			transclude: true,
			template: "<i class='{{button.icon}}'></i> <span>{{button.name}}</span>",
			scope: {
				button: '=data'
			},
			restrict: 'A',
			link: function ($scope, iElm, iAttrs, controller) { 

				iElm.bind('click', function(){	
					var action = $scope.button.action;

										
				})
			}
		}
	})