angular.module('colourChallenge').controller('GameBoardController', [
    'GameBoardService',
    'GRID.CONFIG',
    '$interval',
    '$scope',
    function (service, GRID, $interval, $scope) {
        var self = this;

        //Variables for the css 
        self.loseTheGame = false;


        //Variables of the game
        self.generatedSequence = [];
        self.userSequence = [];
        self.gridBox = GRID.gridBox;
        self.generatedSequenceLocal = [];
        //self.stopInterval = {};


        self.newGame = function ($index) {
            self.loseTheGame = false;
            generateNewGame($index);
        };

        self.hasClicked = function ($index) {
            self.userSequence.push($index);
            console.log( "user sequence " + self.userSequence);
            console.log( "Generated sequence " + self.generatedSequence);
            if (self.userSequence.length >= self.generatedSequence.length) {
                isDone($index);
            }
        };


        function isDone($index) {
            var result = false;
            for (i = 0; i < self.userSequence.length; i++) {
                if (self.generatedSequence[i] === self.userSequence[i]) {
                    result = true;
                }
                else {
                    result = false;
                }
            }

            //If the statement is true we go to next level
            if (result === true) {
                self.generatedSequence.push(service.generateNewPosition(self.generatedSequence));
                self.generatedSequenceLocal = service.getTheArrayValues(self.generatedSequence);
                console.log("Sequencia gerada: " + self.generatedSequence);
                self.userSequence = [];
                self.myLevel = self.myLevel + 1;
                self.myScore = self.myScore + 10;

                colorsSequence($index);

            } else {
                self.loseTheGame = !result; //I'm asking to move the board
                myBesValueResult()
                self.myScore = 0;
            }
        }

        function myBesValueResult() {
            self.myBestValue.push(self.myScore);

            if (self.myBestValue.length >= 2 && self.myBestValue[0] < self.myBestValue[1] ) {
                self.myBestValue[0] = self.myBestValue[1];
                self.myBestValue.pop();
            }
        }

        function generateNewGame($index) {
            self.myLevel = 0;
            self.userSequence = [];
            self.generatedSequence = [service.generateNewPosition(self.generatedSequence)];
            self.generatedSequenceLocal = service.getTheArrayValues(self.generatedSequence);
            colorsSequence($index);
        }

        function colorsSequence($index) {
            self.heartbeatId = self.generatedSequenceLocal.pop();
            console.log("hearbeatId: " + self.heartbeatId);
            // self.stopInterval = $interval(function ($index) {
            //     self.heartbeatId = self.generatedSequenceLocal.shift()
            //     if (self.generatedSequenceLocal.length <= 0) {
            //         $interval.cancel(self.stopInterval[$index]);
            //     }
            // }, 1000);
        };


    }
]);