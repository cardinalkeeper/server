/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Cardinal.core.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Cardinal',

    requires: [
        'Cardinal.core.view.main.Main'
    ],
    
    mainView: 'Cardinal.core.view.main.Main',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Приложение обновлено', 'Приложение было обновлено, перезагрузить?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
