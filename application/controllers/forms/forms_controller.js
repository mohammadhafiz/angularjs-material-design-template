application.controller('FormsController', ['$location', '$mdSidenav', '$scope',
    function($location, $mdSidenav, $scope)
    {
        $scope.theme = 'green';

        $scope.close = function()
        {
            $mdSidenav('menu').close();
        };

        $scope.menu = function()
        {
            $mdSidenav('menu').open();
        };

        $scope.query = {
            username: '',
        };

        $scope.reset = function()
        {
            $scope.query.$ = '';
        };
        
        $scope.user = 
        {
          title: 'Developer',
          email: 'mohammadhafizamiruddin@gmail.com',
          firstName: 'Mohammad Hafiz',
          lastName: 'Amiruddin' ,
          company: 'Menggaris It Sdn Bhd' ,
          address: 'Batu 3 Jalan Apas' ,
          city: 'Tawau' ,
          state: 'Sabah' ,
          biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
          postalCode : '91000',
        };
    
          $scope.title1 = 'Button';
          $scope.title4 = 'Warn';
          $scope.isDisabled = true;
          $scope.googleUrl = 'http://google.com';
}]);