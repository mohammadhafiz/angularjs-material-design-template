application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/todo', {
                controller: 'LoginController',
                templateUrl: 'login.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
