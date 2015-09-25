application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/dashboard', {
                controller: 'DashboardController',
                templateUrl: 'dashboard/dashboard.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
