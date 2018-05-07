// var WetherService = angular.module('myApp');
// console.log(WetherService);
//
// WetherService.factory('BestService', ['$http', function ($http) {
//     var WetherDataOp = {};
//
//
//     WetherDataOp.getCity = function () {
//         return $http({
//             method: 'GET',
//             // url: 'api.openweathermap.org/data/2.5/weather?q=London'
//             url: 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'
//         }).then(function successCallback(response) {
//             // this callback will be called asynchronously
//             // when the response is available
//
//             console.log(response)
//
//         }, function errorCallback(response) {
//             // called asynchronously if an error occurs
//             // or server returns response with an error status.
//             console.error(response)
//         });
//     };
//     return WetherDataOp;
//
// }]);
//
