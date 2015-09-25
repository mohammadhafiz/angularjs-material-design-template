application.controller('DashboardMenuController', ['$location', '$scope',
    function($location, $scope)
    {
        $scope.dashboard = function()
        {
            $location.path('/dashboard');
        };
        
        $scope.charts = function()
        {
            $location.path('/charts');
        };

        $scope.tables = function()
        {
            $location.path('/tables');
        };

        $scope.forms = function()
        {
            $location.path('/forms');
        };

        $scope.uiElement = function()
        {
            $location.path('/uiElement');
        };

        $scope.dropDown = function()
        {
            $location.path('/dropDown');
        };

        $scope.samplePages = function()
        {
            $location.path('/samplePages');
        };
    }]);
