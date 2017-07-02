angular.module('colourChallenge').controller('HomeController', [
    '$scope',
    '$interval',
    function ($scope, $interval){
        var self = this; 
        self.myScore = 0;
        self.myBestValue = [0]; //[Best value, New Value]
        self.loseTheGame = false;
    }


]);