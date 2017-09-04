var prettyCron = require('prettycron');

module.exports = /*@ngInject*/ function($scope, $interval, $http, $log) {
    $scope.runningJobs = undefined;
    $scope.periodicJobs = undefined;
    $scope.formatScheduleString = function(job) {
        return prettyCron.toString([job.minutes_shift, job.hour, job.dayofmonth, job.month, job.day, '*'].join(' '));
    };

    function retrieveJobData() {
        $http.get('https://pidpid-dashboard.s3.amazonaws.com/jobs.json').then(function successCallback(response) {
            $scope.runningJobs = response.data.runningJobs;
            $scope.periodicJobs = response.data.periodicJobSchedule;
        }, function errorCallback(response) {
            $log.debug(response);
        });
    }

    retrieveJobData();
    $interval(retrieveJobData, 1800000);
};