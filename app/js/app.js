require('angular/angular');
require('angular-ui-bootstrap');
require('angular-moment');
angular
    .module('pidpid-dashboard', ['ui.bootstrap', 'angularMoment'])
    .controller('DashboardController', require('./DashboardController'))
    .run(function(amMoment) {
        amMoment.changeLocale('en');
    });