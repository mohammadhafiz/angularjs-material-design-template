application.controller('UiElementController', ['$location', '$mdSidenav', '$scope', '$translate',
    function($location, $mdSidenav, $scope, $translate)
    {
        $scope.theme = 'deep-purple';

        $scope.close = function()
        {
            $mdSidenav('menu').close();
        };

        $scope.items = [1,2,3,4,5];
        
        $scope.menu = function()
        {
            $mdSidenav('menu').open();
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
        
        $scope.color = {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
          };
          $scope.rating1 = 3;
          $scope.rating2 = 2;
          $scope.rating3 = 4;
          $scope.disabled1 = 0;
          $scope.disabled2 = 70;

        $scope.query = 
        {
            username: '',
        };

        $scope.reset = function()
        {
            $scope.query.$ = '';
        };
          
        $scope.selected = [];
        
        $scope.toggle = function (item, list) 
        {
            var idx = list.indexOf(item);
            if (idx > -1) list.splice(idx, 1);
            else list.push(item);
        };
    }]);
    