application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/forms', {
                controller: 'FormsController',
                templateUrl: 'forms/forms.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
