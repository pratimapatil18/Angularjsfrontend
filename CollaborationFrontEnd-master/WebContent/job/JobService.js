app.service('JobService',['$http', '$q','$rootScope',function($http, $q,$rootScope){
	
	var BASE_URL='http://localhost:8080/CollaborationRestServices/';
	return{
		
		
		getAllJobs: function()
		{
			console.log('in service');
			return $http.get(BASE_URL+'viewAllJobs').then(function(response){
                return response.data;
            }, 
           null
    );
			
		},
		
		saveJob: function(job)
		{
			console.log('in service');
			return $http.post(BASE_URL+'createjob',job).then(function(response){
                return response.data;
            }, 
           null
    );
			
		},
		
		
		apply: function(jobApplication)
		{
			console.log('in service save jobApplication method');
			console.log(jobApplication);
			return $http.post(BASE_URL+'applyjob',jobApplication).then(function(response){
				
                return response.data;
            }, 
           null
    );
			
		},
		
		
	
	getAppliedJobs: function(id){
   	 console.log("calling getAppliedJobs"+id)
   	 return $http.get(BASE_URL+'appliedjobs/'+id)
        .then(
                function(response){
               	 $rootScope.appliedjobs=response.data;
                    return response.data;
                }, 
               null
        );
    },
		
    getAllJobApplication: function(){
		   	 console.log("in Job service calling getAppliedJobs")
		   	 return $http.get(BASE_URL+'JobApplication/')
		        .then(
		                function(response){
		               	 $rootScope.selectedJobApplication=response.data;
		               	 console.log($rootScope.selectedJobApplication)
		                    return response.data;
		                }, 
		               null
		        );
		    },
    
	getJobById: function(id){
	   	 console.log("in JOB service  calling getJobById")
	   	 return $http.get(BASE_URL+'Job/'+id)
	        .then(
	                function(response){
	               	 console.log(response.data);
	                	$rootScope.jobprofile.push(response.data);
	                    return response.data;
	                }, 
	               null
	        );
	    },
	    
	    changeStatus: function(jobApplication)
		{
			console.log('in service save jobApplication method');
			//console.log(jobApplication);
			return $http.post(BASE_URL+'changeStatus',jobApplication)
			.then(
					function(response){
				
                return response.data;
            }, 
           null
    );
			
		}

}}]);