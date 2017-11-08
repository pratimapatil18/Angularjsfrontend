app.controller("blogController",['$scope','BlogService','$location','$rootScope',
		function($scope, BlogService, $location, $rootScope) {
	
	var self = this;
	$scope.blogs=[];
	$rootScope.selectedBlogComment=[];
	$scope.blog={
			errorCode: '',
			errorMessage: '',
			id: '',
			title: '',
			description: '',
			date_added: '',
			userid:''
				
			};
	
	$scope.blogComment={
			errorCode: '',
			errorMessage: '',
			id: '',
			blogid: '',
			userid: '',
			comment: '',
			date_added: ''
			
				
	}
	
	self.deleteComment= function(id){
		BlogService.deleteComment(id).then(function(data){
			
			
			self.getAllBlogComment($rootScope.selectedBlog.id);
			alert("blog comment deleted succesfully");
			$location.path("/view_blog");
		},function(errresp){
			alert("Error in deleting comment.. Try after some time");
		});
	}
	self.getAllBlogs=function(){
		console.log('retriving blogss...');
		BlogService.getAllBlogs().then(
		function(data){
			$scope.blogs=data;
		},
		function(errResponse){
			console.log('Error in retriving blogs');
		}
		
		
		);
		
	};
	
	self.saveBlog=function(){
		console.log('adding new blog...');
		$scope.blog.userid=$rootScope.currentUser.id;
		BlogService.saveBlog($scope.blog).then(
		function(data){
			alert("blog added succesfully");
		},
		function(errResponse){
			alert(errResponse);
			console.log('Error in adding new  blogs');
		}
		
		
		);
		
	};
	
	self.showBlog=function(id){
		console.log('retriving blogss...');
		BlogService.getBlog(id)
		.then(
		function(data){
			$location.path("/view_blog");
		},
		function(errResponse){
			console.log('Error in getting blogs');
		}
		
		
		);
		
	};
	
	self.getAllBlogComment = function(blogid) {
		console.log("getAllBlogComments...")
		BlogService.getAllBlogComment(blogid)
				.then(
						function(c) {
							console.log(c);
							
						},
						function(errResponse) {
							console.error('Error while fetching comments');
						});
	};
	
	self.saveBlogComment=function(){
		console.log('adding comment');
		$scope.blogComment.userid=$rootScope.currentUser.id;
		$scope.blogComment.blogid=$rootScope.selectedBlog.id;
		
		console.log($scope.blogComment);
		BlogService.saveBlogComment($scope.blogComment).then(
		function(data){
			self.getAllBlogComment($rootScope.selectedBlog.id);
			
			alert("comment added succesfully");
			
			$location.path("/view_blog");
		},
		function(errResponse){
			alert(errResponse);
			console.log('Error in adding new  comment');
		}
		
		
		);
		
	};

	
} ]);