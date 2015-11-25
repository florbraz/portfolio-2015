define(['app'], function(app){
	
	app.factory('Tasks', function($rootScope, $http){
		
		var Tasks = $rootScope.$new(this);
		
		Tasks.modules = {
			
			myTasks : {
				get : function(){			
					return $http.get('js/application-angular/json/tasks.json')	
						.then(function(data){
							return data;
						});
				}
			},
			
			myTeam : {
				get : function(){			
					return $http.get('js/application-angular/json/teamTasks.json')	
						.then(function(data){
							return data;
						});
				}
			}
		};
		
		return Tasks;
		
	});
});