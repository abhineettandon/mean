meanAdmin
	.config(($stateProvider, $urlRouterProvider) => {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('master', {
				templateUrl : 'admin/app/views/layout/master.html'
			})
			.state('/', {
				url : '/',
				templateUrl : 'admin/app/views/login.html',
				controller : 'loginCtrl'
			})
			.state('master.dashboard', {
				url : '/dashboard',
				templateUrl : 'admin/app/views/dashboard.html',
				controller : 'adminCtrl'
			})

	})