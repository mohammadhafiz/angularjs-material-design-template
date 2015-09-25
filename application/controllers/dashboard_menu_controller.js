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

        $scope.form = function()
        {
            $location.path('/form');
        };

        $scope.uiElement = function()
        {
            $location.path('/uiElement');
        };

        $scope.dropDown = function()
        {
            $location.path('/dropDown');
        };

        $scope.samplePage = function()
        {
            $location.path('/samplePage');
        };
    }]);
