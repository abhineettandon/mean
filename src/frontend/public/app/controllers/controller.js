mean  
    .controller('userCtrl', ['$scope', '$state', 'loginService',
        function($scope, $state, loginService){

           $scope.register = function(formdata){
               
               loginService.register(formdata)
                .then(function(res){

                    console.log(res);

                })


            }

        }])