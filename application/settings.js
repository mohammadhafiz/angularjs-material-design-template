application.factory('Settings', ['$window', 'h', 'secret',
    function($window, h, secret)
    {
        var settings = {};

        settings.host           = $window.decrypt(h.ht, secret);
        settings.client_id      = $window.decrypt(h.id, secret);
        settings.client_secret  = $window.decrypt(h.st, secret);

        settings.scopes = [
            // Client credentials
            'create_client_data',
            'read_client_data',
            'update_client_data',
            'delete_client_data',

        ];

        return settings;
    }]);
