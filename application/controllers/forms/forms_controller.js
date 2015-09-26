application.controller('FormsController', ['$location', '$mdSidenav', '$mdThemingProvider', '$scope', '$translate',
    function($location, $mdSidenav, $mdThemingProvider, $scope, $translate)
    {
        $scope.theme = 'green';

        $scope.query = {
            username: '',
        };

        $scope.close = function()
        {
            $mdSidenav('menu').close();
        };

        $scope.reset = function()
        {
            $scope.query.$ = '';
        };

        $scope.menu = function()
        {
            $mdSidenav('menu').open();
        };
        
        $scope.user = function()
        {
          title: 'Developer',
          email: 'ipsum@lorem.com',
          firstName: '',
          lastName: '' ,
          company: 'Google' ,
          address: '1600 Amphitheatre Pkwy' ,
          city: 'Mountain View' ,
          state: 'CA' ,
          biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
          postalCode : '94043'
        };
        
          .config( function()
          {
            $mdThemingProvider.theme('light-green', 'default')
                .primaryPalette('yellow')
                .dark();
          };
    }]);