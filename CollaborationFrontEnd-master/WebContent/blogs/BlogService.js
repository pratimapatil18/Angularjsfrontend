app.service('BlogService',['$http', '$q','$rootScope',function($http, $q,$rootScope){
	
	var BASE_URL='http://localhost:8080/CollaborationRestServices/';
	return{
		
		
		getAllBlogs: function()
		{
			console.log('in service getAllBlogs method');
			return $http.get(BASE_URL+'viewAllBlogs').then(function(response){
                return response.data;
            }, 
           null
    );
			
		},
		
deleteComment:function(id)
{
	console.log('in service saveBlog method');
	return $http.delete(BASE_URL+'deletecomment/'+id).then(function(response){
		
        return response.data;
    }, 
   null
);
	
},
		
		saveBlog: function(blog)
		{
			console.log('in service saveBlog method');
			return $http.post(BASE_URL+'createblog',blog).then(function(response){
				
                return response.data;
            }, 
           null
    );
			
		},
	
	
	getBlog: function(id) {
    	console.log("calling getblog method")
            return $http.get(BASE_URL+'showBlog/'+id)
                    .then(
                            function(response){
                            	
                            	$rootScope.selectedBlog=response.data;
                            	console.log(response.data);
                                return response.data;
                            }, 
                         
                            null
                    );
	},
		
	
		getAllBlogComment: function(blogid)
		{
			console.log('in service getAllBlogComment method');
			return $http.get(BASE_URL+'viewAllComments/'+blogid).then(function(response){
				$rootScope.selectedBlogComment=response.data;
				console.log("data");
				console.log($rootScope.selectedBlogComment);
                return response.data;
            }, 
           null
    );
			
		},
		
		saveBlogComment: function(blogcomment)
		{
			console.log('in service saveBlogComment method');
			console.log(blogcomment);
			return $http.post(BASE_URL+'createblogcomment',blogcomment).then(function(response){
				
                return response.data;
            }, 
           null
    );
			
		},
		
	}
}]);