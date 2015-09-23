application.factory('Settings', ['$window', 'h', 'secret',
    function($window, h, secret)
    {
        var settings = {};

        settings.host           = $window.decrypt(h.ht, secret);
        settings.user_id      = $window.decrypt(h.id, secret);
        settings.user_secret  = $window.decrypt(h.st, secret);

        settings.scopes = [
            // user credentials
            'create_user_data',
            'read_user_data',
            'update_user_data',
            'delete_user_data',

        ];

        return settings;
    }]);
