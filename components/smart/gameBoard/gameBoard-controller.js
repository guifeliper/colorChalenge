angular.module('colourChallenge').controller('GameBoardController', [

    'GRID.CONFIG',
    '$interval',
    '$scope',
    function (GRID, $interval, $scope) {
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
            generateNewGame($index);
        };

        self.hasClicked = function ($index) {
            self.userSequence.push($index);
            if (self.userSequence.length == self.generatedSequence.length) {
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
                self.generatedSequence.push(generateNewPosition());
                self.generatedSequenceLocal = getTheArrayValues(self.generatedSequence);
                self.userSequence = [];
                self.myScore = self.myScore + 10;

                colorsSequence($index);

            } else {
                self.loseTheGame = !result; //I'm asking to move the board
                self.myScore = 0;
            }
        }
        
        function generateNewGame($index) {
            self.myLevel = 0;
            self.userSequence = [];
            self.generatedSequence = [generateNewPosition()];
            self.generatedSequenceLocal = getTheArrayValues(self.generatedSequence);
            colorsSequence($index);
        }

        function colorsSequence($index) {
            //self.stopInterval[$index] = $interval(function ($index) {
            self.stopInterval = $interval(function ($index) {
                self.heartbeatId = self.generatedSequenceLocal.shift()
                if (self.generatedSequenceLocal.length <= 0) {
                    $interval.cancel(self.stopInterval[$index]);
                }
            }, 1000);
        };
        
        function generateNewPosition() {
            var randomNumberGenerated = Math.floor(Math.random() * (self.gridBox.length -1)) + 0;
            var lastPosition = self.generatedSequence.length - 1


            if (self.generatedSequence[lastPosition] === randomNumberGenerated) {
                randomNumberGenerated = Math.floor(Math.random() * (self.gridBox.length -1)) + 0;
            }
            return randomNumberGenerated;

        }
        
        //I'm using this function to not get arrays by reference
        // I had a problem with that and I solve it in a dumb way
        function getTheArrayValues(arrayForCopy) {
            var arrayCopied = [];
            for (i = 0; i < arrayForCopy.length; i++) {
                arrayCopied.push(arrayForCopy[i]);
            }
            return arrayCopied;
        }
    }
]);