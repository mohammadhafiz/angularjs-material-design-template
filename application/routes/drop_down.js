application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/dropDown', {
                controller: 'DropDownController',
                templateUrl: 'drop_down/drop_down.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
