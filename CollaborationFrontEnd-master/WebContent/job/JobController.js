app.controller("jobController",['$scope','JobService','$location','$rootScope',
		function($scope, JobService, $location, $rootScope) {
	
	var self = this;
	$scope.jobs=[];
	$rootScope.selectedJobApplication=[];
	$rootScope.jobprofile=[];
	$scope.job={
			errorCode: '',
			errorMessage: '',
			id: '',
			jobtitle: '',
			jobdescription: '',
			postdate: ''
			};
	
	$scope.jobApplication = {
			errorCode : '',
			errorMessage : '',
			id : '',
			jobid : '',
			userid : '',
			applieddata : '',
		    status : '',
		    reason : ''
			
		};
	
	self.getAllJobs=function(){
		console.log('retriving Jobss...');
		JobService.getAllJobs().then(
		function(data){
			$scope.jobs=data;
		},
		function(errResponse){
			console.log('Error in retriving jobs');
		}
		
		
		);
		
	};
	
	self.saveJob=function(){
		console.log('adding new job...');
		JobService.saveJob($scope.job).then(
		function(data){
			self.getAllJobs();
			alert("Job posted succesfully");
			$location.path("/ViewJob");
		},
		function(errResponse){
			alert(errResponse);
			console.log('Error in adding new Job');
		}
		
		
		);
		
	};
	
	self.apply=function(jobid){
		console.log('apply method initiated');
		$scope.jobApplication.jobid=jobid;
		$scope.jobApplication.userid=$rootScope.currentUser.id;
		$scope.jobApplication.status='P';
		$scope.jobApplication.reason='Application Not Viewed';
		console.log($scope.jobApplication);
		JobService.apply($scope.jobApplication).then(
		function(data){
			alert("job applied succesfully");
		},
		function(errResponse){
			alert(errResponse);
			console.log('Error in applying for a job');
		}
		
		
		);
		
	};
	
	self.getAppliedJobs = function(id) {
		console.log("Displaying All AppliedJobs")
		JobService.getAppliedJobs(id)
				.then(
						function(response){
							console.log(response);
						},
						function(errResponse) {
							console.error('Error while Displaying applied jobs');
						}
					 );
	};
	
	self.getAllJobApplication = function() {
		console.log(" in Job controller Displaying All Job Application method")
		JobService.getAllJobApplication()
				.then(
						function(response){
							console.log(" getting back to Job controller from job service")
							console.log(response);
						},
						function(errResponse) {
							console.error('Error while Displaying All Job Application method');
						}
					 );
	};
	
	self.getJobById = function(id) {
		console.log("in Job controller calling getJobById method")
		JobService.getJobById(id)
				.then(
						function(response){
							console.log(response);
						},
						function(errResponse) {
							console.error('Error while calling getJobById method');
						}
					 );
	};
	
	self.changeStatus = function(status,application) {
		console.log("in Job controller calling changeStatus method");
		//application.reason=$scope.jobApplication.reason;
		application.status=status;
		
		console.log(application);
		JobService.changeStatus(application)
				.then(
						function(response){
							console.log(response);
							
						},
						function(errResponse) {
							console.error('Error in Job controller while calling changeStatus method');
						}
					 );
	};
	
} ]);