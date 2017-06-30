angular.module('colourChallenge').controller('HomeController', [
    '$scope',
    '$interval',
    function ($scope, $interval){
        var self = this; 


        self.myScore = 0;
        self.myLevel = 0;
        self.myBestValue = [0]; //[Best value, New Value]
        self.loseTheGame = false;

        $scope.$watch( () => {
            return self.loseTheGame;
        }, function() {
            console.log(self.myScore);
            if (self.loseTheGame == true) {
                self.myBestValue.push(self.myScore);
                console.log(self.myBestValue);
                if (self.myBestValue.length >= 2 && self.myBestValue[1]>= self.myBestValue[2]) {
                    self.myBestValue.pop();
                    console.log(self.myBesValue);
                }
            }
        }, true);

        /*        if (self.loseTheGame == true) {
            self.myBestValue.push(self.myScore);
            if (self.myBestValue.length >= 2 && self.myBestValue[1]>= self.myBestValue[2]) {
                self.myBestValue.pop();
                console.log(self.myBesValue);
            }
        }*/
    }


]);