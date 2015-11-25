define(['app'], function(app){
	
	app.factory('User', function($rootScope, $http){
		
		var User = $rootScope.$new(this);
		
		User.modules = {
			get : function(){
				return $http.get('js/application-angular/json/user.json')
					.then(function(data){
						return data;
					});
			}
		};	
		
		return User;
		
	});	
});