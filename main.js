var app = angular.module('app', []);
app.controller('myController', function ($scope) {

	$scope.users = [{
		name:'users',
		email:'test@test.com',
		role:'admin'
	},
	{
		name:'',
		email:'',
		role:''

	},
	{
		name:'',
		email:'',
		role:''
	}
	]
});
	

//var myCtrl= angular.module('myCtrlApp', []);
//  myCtrl.controller('myCtrl', function ($scope, $http){
//    $http.get('/localhost:3000/api/v1/users').success(function(data) {
//      $scope.users = data;
//			{"name": "", 'email': "", 'role': ""},
//			{"name": "", 'email': "", 'role': ""},
//			{"name": "", 'email': "", 'role': ""},
//			{"name": "", 'email': "", 'role': ""},
//			{"name": "", 'email': "", 'role': ""}
//		];
//		person.name = '1';
//		person.email = 'test@email.com';
//		person.role = 'admin';
    
 