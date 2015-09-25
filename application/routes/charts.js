application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/charts', {
                controller: 'ChartsController',
                templateUrl: 'charts/charts.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
