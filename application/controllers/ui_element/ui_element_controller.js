application.controller('UiElementController', ['$location', '$mdSidenav', '$scope', '$translate',
    function($location, $mdSidenav, $scope, $translate)
    {
        $scope.theme = 'deep-purple';

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

        $scope.items = [1,2,3,4,5];
        
        $scope.selected = [];
        
        $scope.toggle = function (item, list) 
        {
            var idx = list.indexOf(item);
            if (idx > -1) list.splice(idx, 1);
            else list.push(item);
        };
        
        $scope.exists = function (item, list) 
        
        {
        return list.indexOf(item) > -1;
        };
        
        $scope.myDate = new Date();
        
        $scope.minDate = new Date(
        
        $scope.myDate.getFullYear(),
        
        $scope.myDate.getMonth() - 2,
        
        $scope.myDate.getDate());
        
        $scope.maxDate = new Date(
        
        $scope.myDate.getFullYear(),
        
        $scope.myDate.getMonth() + 2,
        
        $scope.myDate.getDate());   
    }]);
    