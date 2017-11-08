var app = angular.module("myApp", ["ngRoute","ngCookies"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    
    <!-------- BLOG section- --------------------------->
    .when("/allblogs", {
        templateUrl : "blogs/allblogs.html",
        controller: "blogController"
        	
    })
    .when("/addblog", {
        templateUrl : "blogs/addblog.html",
        	controller: "blogController"
             	
    })
    
    .when("/view_blog", {
        templateUrl : "blogs/view_blog.html",
        	controller: "blogController"
             	
    })
    
    <!-------- USER section---------------------------->
    
    .when("/register", {
        templateUrl : "user/register.html",
        	controller: "userController"
        		
    })
    
    .when("/login", {
        templateUrl : "user/login.html",
        	controller: "userController"
        		
    })
    
    .when("/myprofile", {
        templateUrl : "user/myprofile.html",
        controller: 'userController'
    })
    
    <!-------- job section---------------------------->
    
    
     .when("/ViewJob", {
        templateUrl : "job/ViewJob.html",
        	controller: "jobController"
        		
    })
    
    .when("/AddJob", {
        templateUrl : "job/AddJob.html",
        	controller: "jobController"
        		
    })
     
     .when("/appliedjobs", {
         templateUrl : "job/appliedjobs.html",
         	controller: "jobController"
         		
     })
     
     
     .when("/managejobs", {
         templateUrl : "job/managejobs.html",
         	controller: "jobController"
         		
     })
     
     <!-------- Friend section---------------------------->
     
     .when("/AddFriend", {
         templateUrl : "friend/AddFriend.html",
         	controller: "friendController"
         		
     })
     
     .when("/friends", {
         templateUrl : "friend/friends.html",
         	controller: "friendController"
         		
     })
     
     .when("/AcceptReq", {
         templateUrl : "friend/AcceptReq.html",
         	controller: "friendController"
         		
     })
     
     //---------------CHAT SECTION--------------------
     
     .when("/chat", {
         templateUrl : "chat/chat.html",
         	controller: "chatcontroller"
         		
     });
});