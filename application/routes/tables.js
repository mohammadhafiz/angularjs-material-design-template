application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/tables', {
                controller: 'TablesController',
                templateUrl: 'tables/tables.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
