meanAdmin  
    .controller('loginCtrl', ['$rootScope', '$scope', '$state', 'loginService',
        function($rootScope, $scope, $state, loginService){

            $scope.login = (formdata) => {

                console.log(formdata);

                $rootScope.isLoggedIn = true;

                $state.go('master.dashboard');

            }

        }])

     .controller('adminCtrl', ['$rootScope' ,'$scope', '$state', 'loginService',
        function($rootScope, $scope, $state, loginService){

         

        }])