
var meteoControllers = angular.module('meteoControllers', []);
meteoControllers.controller('MainController', ['$scope', '$http',
   function($scope, $http) {
$scope.recherche = function() {
/* appel AJAX à l’API openweathermap */
$http.get('https://demo.bilelz.fr/owmap/?q='+$scope.city+'&units=metric&appid='e0c5699f772b215c86af11bd1b7a41d1'
)
  .success(function(data) {
/* on met dans l’objet 
meteo
 les données retournées
par openweathermap */
 $scope.meteo = data;
 }).error(function(data) {
/* en cas d’erreur */
 $scope.errorMsg =  "Hum. Error... please retry.";
 });
}

$scope.gps = function() {
   
   // js geoloc
   
/* appel AJAX à l’API openweathermap */
$http.get('https://demo.bilelz.fr/owmap/?q='+$scope.city+'&units=metric&appid='e0c5699f772b215c86af11bd1b7a41d1'
)
  .success(function(data) {
/* on met dans l’objet 
meteo
 les données retournées
par openweathermap */
 $scope.meteo = data;
 }).error(function(data) {
/* en cas d’erreur */
 $scope.errorMsg =  "Hum. Error... please retry.";
 });
}
}]);
