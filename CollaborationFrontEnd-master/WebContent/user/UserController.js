app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
app.controller("userController",['$scope','UserService','$location','$rootScope','$cookies',
		function($scope, UserService, $location, $rootScope, $cookies) {
	
	
	var self = this;
	$scope.users=[];
	$rootScope.friendprofile=[];
	$rootScope.userprofile=[];
	self.buser={
			errorCode: '',
			errorMessage: '',
			id: '',
			email: '',
			userrole: '',
			dob: '',
			firstname: '',
			lastname: '',
			password: '',
			phoneno: '',
			gender: '',
			imagepath: ''
			};
	$scope.user={
			errorCode: '',
			errorMessage: '',
			id: '',
			email: '',
			userrole: '',
			dob: '',
			firstname: '',
			lastname: '',
			password: '',
			phoneno: '',
			gender: '',
			imagepath: ''
			};
	
	self.getAllUser=function(){
		console.log('retriving userss...');
		UserService.getAllUser()
		.then(
		function(data){
			$scope.users=data;
		},
		function(errResponse){
			console.log('Error in retriving user');
		}
		
		);
		
	};
	
	self.searchpeople=function()
	{
		console.log("searchpeople");
		UserService.search($scope.name)
		.then(
				function(u)
				{
					console.log(u);
					$scope.searchresults=u;
				},
				function(errResponse)
				{
					console.log("error");
				}
			 );
};
	
self.getuser=function(id)
{
	console.log('in user cntrl getuser method ...'+id);
	
	UserService.getuser(id)
	.then(
			function(response)
			{
				//console.log(response);
				self.buser=response;
			},
			function(errResponse)
			{
				console.error('Error while retrieving user');
			})
};


self.getuserByName=function(nm)
{
	console.log('in user cntrl getuser method ...'+nm);
	UserService.getuserByName(nm)
	.then(
			function(response)
			{
				
			},
			function(errResponse)
			{
				console.error('Error while retrieving user');
			})
};
	
self.getUserById=function(userid)
{
	console.log('in user cntrl getUserById method ...'+userid);
	UserService.getUserById(userid)
	.then(
			function(response)
			{
				
			},
			function(errResponse)
			{
				console.error('Error while retrieving user');
			})
};


	self.saveUser=function(){
		console.log('adding new user...');
		UserService.saveUser($scope.user).then(
		function(data){
			alert("user added succesfully");
		},
		function(errResponse){
			alert(errResponse);
			console.log('Error in adding new  user');
		}
		
		
		);
		
	};
	
	self.validate = function() {
		console.log("authenticating...");
		console.log($scope.user);
		UserService
				.validate($scope.user)
				.then(

						function(data) {
								console.log(data);
							$scope.user = data;
							console.log($scope.user);
							console
									.log("user.errorCode: "
											+$scope.user.errorCode)
							if ($scope.user.errorCode == "404")

							{
								alert($scope.user.errorMessage);

								user.email = "";
								user.password = "";

							} else { // valid
										// credentials
								console
										.log("Valid credentials. Navigating to home page");

								

								console.log('Current user : '+$scope.user);
								$rootScope.currentUser = $scope.user;
								console.log($rootScope.currentUser);
								$cookies.put('currentUser',$rootScope.currentUser);
								console.log($rootScope.currentUser.userrole);
									
								$location.path('/');
							}

						},
						function(errResponse) {

							console
									.error('Error while authenticate Users');
						});
	};
	
	self.uploadFile=function(){
		  console.log("uploading file");
		  var file =  $scope.myfile;
			  console.log(file);
			  var fd = new FormData();
			   fd.append('file',file);
			   UserService.uploadFile(fd,$rootScope.currentUser.id)
				.then(
						function(response)
						{
							console.log(response);
							alert("Image uploaded successfully");
						},
						function(errResponse)
						{
							console.log("Error while uploading profile picture");
						}
					  );
			
			};
			
			self.logout=function()
			{
				console.log("logging out current user");
				UserService.logout()
					.then(
							function()
							{
								$rootScope.currentUser='';
								$cookies.remove('currentUser');
								alert("Logged out successfully");
								$location.path("/login");
							},
							function(errResponse){
								console.error('Error while logging out');
			                });
			
			}
			

} ]);