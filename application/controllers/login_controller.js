application.controller('LoginController', ['$scope', 'Auth', 'isGuest',
    function($scope, Auth, isGuest)
    {
        $scope.credentials = {
            username: '',
            password: '',
        };
    }]);
