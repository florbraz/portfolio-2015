define(['app'], function(app){
	
	app.factory('Processes', function($rootScope, $http){
		
		var Processes = $rootScope.$new(this);
		
		Processes.modules = {
			
			myProcesses : {
				
				add : function(data){
					return $http.post('js/application-angular/json/process.json', data)
							.then(function(response){
								return response;
							});
				},
				
				get : function(){			
					return $http.get('js/application-angular/json/processes.json')	
						.then(function(data){
							return data;
						});
				},
				
				view : function(id){
					return $http.get('js/application-angular/json/process.json')
						.then(function(data){
							return data;
						});
				},
				
				messages : {
					
					add : function(data){
						return $http.get('js/application-angular/json/process.json', data)
							.then(function(response){
								return response;
							});
					}	
				}
			},
			
			processModels : {
				
				get : function(){			
					return $http.get('js/application-angular/json/processModels.json')	
						.then(function(data){
							return data;
						});
				}
			}
		};
		
		return Processes;
		
	});
});