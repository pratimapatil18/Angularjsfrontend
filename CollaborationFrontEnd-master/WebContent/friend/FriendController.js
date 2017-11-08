app.controller("friendController",['$scope','FriendService','$location','$rootScope',
		function($scope, FriendService, $location, $rootScope) {
	
	var self = this;
	$scope.friends=[];
	$scope.friend={
			errorCode: '',
			errorMessage: '',
			friendid: '',
			userid: '',
			status: '',
			isOnline: ''
			};
	$rootScope.friendprofile=[];
	
	
	self.getAllFriends = function(id) {
		console.log("search All Friends ")
		FriendService.getAllFriends(id)
				.then(
						function(response) {
							console.log(response);
							
						},
						function(errResponse) {
							console.error('Error while fetching jobs');
						});
	}
	
	self.addFriend = function(friendid){
		console.log("adding new friend");
		$scope.friend.userid = $rootScope.currentUser.id;
		$scope.friend.friendid= friendid;
		$scope.friend.status="I";
		
		FriendService.addFriend($scope.friend)
		.then(
				function(response) {
					alert("Friend added Sucessfully");
					
				},
				function(errResponse) {
					console.log(errResponse);
					console.error('Error while adding friend');
				});
		
	}
	
	self.sendreq = function(id) {
		console.log("Calling sendreq...")
		FriendService.SendFriendRequest(id,$rootScope.currentUser.id)
				.then(

						function(){
							alert("Friend request sent");
							$location.path("/searchpeople");
						},
						function(errResponse){
							console.error('Error while sending friend request');
						
						});
	}
	
	self.acceptreq = function(id) {
		console.log("Calling acceptreq...");
		FriendService.AcceptFriendRequest($rootScope.currentUser.id,id)
				.then(

						function(){
							alert("Friend request accepted");
							$location.path("/friends");
						},
						function(errResponse){
							console.error('Error while accepting friend request');
						}
					);
	}
	
	self.getrecreq = function() {
		console.log("getrecreq...");
		console.log($rootScope.currentUser.id);
		FriendService.getAllRequests($rootScope.currentUser.id)
				.then(
						function(r) {
							console.log(r);
							$scope.recreq = r;
						},
						function(errResponse) {
							console.error('Error while fetching recieved friend requests');
						});
	}
	
}]);
