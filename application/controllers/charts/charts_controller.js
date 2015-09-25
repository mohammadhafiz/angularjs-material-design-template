application.controller('ChartsController', ['$location', '$mdSidenav', '$scope', '$translate',
    function($location, $mdSidenav, $scope, $translate)
    {
        $scope.theme = 'teal';

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
    }]);
