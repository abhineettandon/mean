meanAdmin
    .service('loginService', ['$http', 
        function($http){

            this.register = (formdata) => {

                return $http.post('/api/register', formdata)
                    .then(function successCallback(response){
                        return response;
                    }, function errorCallback(response){
                        console.log('response');
                        return response;
                    })

            }

        }])