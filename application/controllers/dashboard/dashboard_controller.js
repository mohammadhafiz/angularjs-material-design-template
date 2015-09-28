application.controller('DashboardController', ['$interval', '$mdSidenav', '$scope',
    function($interval, $mdSidenav, $scope)
    {
        $scope.theme = 'teal';

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

        var self = this, j= 0, counter = 0;
        self.mode = 'query';
        self.activated = true;
        self.determinateValue = 30;
        self.determinateValue2 = 30;
        self.modes = [ ];

        self.toggleActivation = function() {
            if ( !self.activated ) self.modes = [ ];
            if (  self.activated ) {
              j = counter = 0;
              self.determinateValue = 30;
              self.determinateValue2 = 30;
            }
        };
        
        $interval(function() {
          self.determinateValue += 1;
          self.determinateValue2 += 1.5;
          if (self.determinateValue > 100) self.determinateValue = 30;
          if (self.determinateValue2 > 100) self.determinateValue2 = 30;
            if ( (j < 2) && !self.modes[j] && self.activated ) {
              self.modes[j] = (j==0) ? 'buffer' : 'query';
            }
            if ( counter++ % 4 == 0 ) j++;
            if ( j == 2 ) self.contained = "indeterminate";
        }, 100, 0, true);
        $interval(function() {
          self.mode = (self.mode == 'query' ? 'determinate' : 'query');
        }, 7200, 0, true);
}]);