application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/samplePages', {
                controller: 'SamplePagesController',
                templateUrl: 'sample_pages/sample_pages.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
