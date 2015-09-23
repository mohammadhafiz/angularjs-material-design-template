var application = angular.module('application', [
    'm',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMessageFormat',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate', // angular-translate
    'application.templates', // application templates cache
]);

application.config(['$httpProvider',
    function($httpProvider)
    {
        $httpProvider.defaults.headers = {
            common: {
                'Content-Type': 'application/json',
            },
            post: {
                'Content-Type': 'application/json',
            },
            put: {
                'Content-Type': 'application/json',
            },
            delete: {
                'Content-Type': 'application/json',
            },
        };

        $httpProvider.interceptors.push('HttpInterceptor');
    }]);

application.config(['$mdThemingProvider',
    function($mdThemingProvider)
    {
        $mdThemingProvider.alwaysWatchTheme(true);
        
        $mdThemingProvider.theme('cyan')
            .primaryPalette('cyan')
            .accentPalette('indigo');
            
        $mdThemingProvider.theme('purple')
            .primaryPalette('purple')
            .accentPalette('indigo');

        $mdThemingProvider.theme('red')
            .primaryPalette('red')
            .accentPalette('indigo');

        $mdThemingProvider.theme('teal')
            .primaryPalette('teal')
            .accentPalette('indigo');
            
        $mdThemingProvider.theme('grey')
            .primaryPalette('grey', {
                default: '200',
            })
            .accentPalette('blue');

        $mdThemingProvider.theme('white')
            .primaryPalette('grey', {
                default: '200',
            })
            .accentPalette('blue');
    }]);

application.config(['$translateProvider',
    function($translateProvider)
    {
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.preferredLanguage('en');
    }]);

application.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider)
    {
        $locationProvider.html5Mode(true)
            .hashPrefix('!#');

        $routeProvider.otherwise({
                redirectTo: '/login',
            });
    }]);

application.run(['$location', '$rootScope', 'Auth',
    function($location, $rootScope, Auth)
    {
        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection)
        {
            switch (rejection) {
                case 'auth.is_guest':
                    $location.path('/modules');
                    break;
                case 'auth.is_logged':
                    Auth.forget();
                    break;
            }
        });
    }]);
