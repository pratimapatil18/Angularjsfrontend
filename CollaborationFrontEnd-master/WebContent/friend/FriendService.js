app.service('FriendService',['$http','$rootScope', function($http,$rootScope) {
	
	var BASE_URL='http://localhost:8080/CollaborationRestServices/';
	return{
	
			 getAllFriends: function(id) 
			 {
		         	console.log("in service calling getAllFriends method");
		                 return $http.get(BASE_URL+'allfriends/'+id)
		                         .then(
		                                 function(response){
		                                	 console.log(response.data);
		                                	 $rootScope.allfriends= response.data;
		                                     return response.data;
		                                 }, 
		                                null
		                         );
		      },
		      
		      
	addFriend:function(friend)
	{
		console.log("in service calling add friend method");
        return $http.post(BASE_URL+'addfriend',friend)
                .then(
                        function(response){
                            return response.data;
                        }, 
                       null
                );
	},
	
	 SendFriendRequest: function(id,userId) 
 	 {
 		 	console.log("calling SendFriendRequest");
 		 	return $http.post(BASE_URL+'sendreq/'+id+'/'+userId)
 		 	.then(
 		 			function(response)
    	  			{
    	  				console.log("inside sendreq");
    	  				return response.data;
    	  			},
    	  			null
            );
 		 	
 	 },
		      
		      AcceptFriendRequest: function(id,userId) 
				 {
				 		console.log("calling AcceptFriendRequest");
				 		return $http.post(BASE_URL+'acceptreq/'+id+'/'+userId)
				 		.then(
				 				function(response)
			        	  		{
			        	  			console.log("inside acceptreq");
			        	  			return response.data;
			        	  			
			        	  		},
			        	  		null
			                  );
				 		
				 },
				 
				 getAllRequests: function(id) 
				 {
			         	console.log("calling getAllRequests");
			                 return $http.get(BASE_URL+'requests/'+id)
			                         .then(
			                                 function(response){
			                                     return response.data;
			                                 }, 
			                                null
			                         );
			      }
		
		
}
}]);