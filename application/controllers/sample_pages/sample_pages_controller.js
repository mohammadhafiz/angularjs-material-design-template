application.controller('SamplePagesController', ['$location', '$mdSidenav', '$scope', '$translate',
    function($location, $mdSidenav, $scope, $translate)
    {
        $scope.theme = 'light-green';

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
    }]);
