application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/uiElement', {
                controller: 'UiElementController',
                templateUrl: 'ui_element/ui_element.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
