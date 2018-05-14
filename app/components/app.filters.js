angular
    .module('app')
    .filter('climate', function(){
        return function(value){
            value = value - 273.15;
            
            return (value % 1 === 0 ? value : value.toFixed(2));
        }
    })

    .filter('climateFont', function(){
        return function(value){
            value = value - 273.15;
            
            return value <= 5 ? 'fontBlue' : value > 5 && value <= 26 ? 'fontOrange' : 'fontRed';
        }
    })

    .filter('humidity', function(){
        return function(value){
            
            return value + '%' ;
        }
    })

    .filter('pressure', function(){
        return function(value){
            
            return value + 'hPa' ;
        }
    })

    