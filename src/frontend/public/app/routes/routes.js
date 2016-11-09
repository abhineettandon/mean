mean
	.config(($stateProvider, $urlRouterProvider) => {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('master', {
				templateUrl : 'public/app/views/layout/master.html'
			})
			.state('master.home', {
				url : '/',
				templateUrl : 'public/app/views/home.html',
				controller : 'userCtrl'
			})
			.state('master.register', {
				url : '/register',
				templateUrl : 'public/app/views/register.html',
				controller : 'userCtrl'
			})
			.state('master.login', {
				url : '/login',
				templateUrl : 'public/app/views/login.html',
				controller : 'userCtrl'
			})

	})