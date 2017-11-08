app.service('UserService',['$http', '$q','$rootScope',function($http, $q,$rootScope){
	
	var BASE_URL='http://localhost:8080/CollaborationRestServices/';
	return{
		
		
		getAllUser: function()
		{
			console.log('in user service getAllUser method');
			return $http.get(BASE_URL+'viewAllUser').then(function(response){
				$rootScope.allusers=response.data;
                return response.data;
            }, 
           null
    );
			
		},
		
		
		 getuser:function(id)
		 {
			 console.log('in user service getuser method...'+id);
			 return $http.get(BASE_URL+"user/"+id)
			 .then(
					 function(response)
					 {
						 console.log("getting back to getuser method in user service from REST controller");
						// console.log(response.data);
						 $rootScope.selectedUser=response.data;
						 $rootScope.friendprofile.push(response.data);
						// console.log($rootScope.friendprofile);
						 return response.data;
				 
				 }, 
				 null);
		 },
		 getuserByName:function(usernm)
		 {
			 console.log('in user service getUserById method...'+usernm);
			 return $http.get(BASE_URL+"userByName/"+usernm)
			 .then(
					 function(response)
					 {
						 console.log("hiiii getting back to user service from REST cntrl");
						 console.log(response.data);
						 $rootScope.friendp=response.data;
						 return response.data;
				 
				 }, 
				 null);
		 },
		 
		 getUserById:function(userid)
		 {
			 console.log('in user service getUserById method...'+userid);
			 return $http.get(BASE_URL+"user/"+userid)
			 .then(
					 function(response)
					 {
						 console.log("hiiii getting back to user service from REST cntrl");
						 console.log(response.data);
						 $rootScope.selectedusr=response.data;
						 $rootScope.userprofile.push(response.data);
						 return response.data;
				 
				 }, 
				 null);
		 },
		
		saveUser: function(user)
		{
			console.log('in user service saveUser method');
			return $http.post(BASE_URL+'saveUser',user).then(function(response){
                return response.data;
            }, 
           null);
			
		},
		
		search: function(name)
		 {
			 console.log("in user service search method");
			 return $http.post(BASE_URL+'searchpeople/',name)
			 .then
			 (
					 function(response)
					 {
						 console.log("inside checkfriends");
						 console.log(response.data);
						 return response.data;
					 },
					 null);
		},
		
		
		validate: function(user){
     	  
			console.log("Calling the method authenticate with the user :"+user);
			return $http.post(BASE_URL+'/validate',user)
			.then(function(response){
                         console.log("data returned: "+response.data);
                        
                             return response.data;   //user json object
                       
                             
                         }, 
                        null);
		},
		
	
	uploadFile:function(fd,id)
	{
		 
		 return $http.post(BASE_URL+'uploadFile/'+id,fd,{
	            transformRequest: angular.identity,
	            headers: {'Content-Type': undefined}
	        })
		 .then(
				 function(response)
				 {
					 return response.data;
				 },
				 null
			  );
	 },

	 
	logout:function()
	{
	 //console.log("calling logout");
	 return $http.get(BASE_URL+"/logout");
	}
	 
	 
	 
	 
	}	
}]);