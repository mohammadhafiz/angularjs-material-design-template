application.controller('TodoController', ['$location', '$scope',
    function($location, $scope)
    {
        $scope.clientManagement = function()
        {
            $location.path('/access_control/clients');
        };
    }]);
