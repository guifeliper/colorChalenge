/*angular.module('colourChallenge').controller('GameBoardController', [
    'GRID.CONFIG',
    '$interval',
    '$scope',
    function GameBoardController(GRID, $interval, $scope) {
        var self = this;
        var $ctrl = this;

        //DOM
        var nextPhase = document.getElementsByClassName("next-phase");

        //Variables for the css 
        self.loseTheGame = false;
        self.nextLevel = false;


        //Variables of the game
        self.myLevel = 0;
        self.generatedSequence = [1, 3, 5, 3];  //[];
        self.userSequence = [];
        self.gridBox = GRID.gridBox;

        var generatedSequenceLocal = [];

        self.newGame = function () {
            // generatedSequenceLocal = [];
            // generatedSequenceLocal.push(generateNewPosition());
            self.myLevel = 0;
            // self.generatedSequence = [].concat(generatedSequenceLocal);
            self.userSequence = [];

            console.log("limpei");
            console.log(self.generatedSequence);
        };

        self.hasClicked = function ($index) {
            self.userSequence.push($index);
        };


        self.isDone = function isDone() {
            var result = false;
            for (i = 0; i < self.userSequence.length; i++) {
                if (self.generatedSequence[i] === self.userSequence[i]) {
                    result = true
                }
                else {
                    result = false
                }
            }

            //If the statement is true we go to next level

            if (result === true) {
                // generatedSequenceLocal.push(generateNewPosition());
                // self.generatedSequence = [].concat(generatedSequenceLocal);
                self.userSequence = [];
                self.myLevel = self.myLevel + 1;
                self.nextLevel = !self.nextLevel;
            } else {
                self.loseTheGame = !result; //I'm asking to move the board
            }
        }


        function generateNewPosition() {
            var randomNumberGenerated = Math.floor(Math.random() * 15) + 0;
            var lastPosition = self.generatedSequence.length - 1


            if (self.generatedSequence[lastPosition] === randomNumberGenerated) {
                randomNumberGenerated = Math.floor(Math.random() * 15) + 0;
            }
            return randomNumberGenerated;

        }
    }
]);
*/

angular.module('colourChallenge').controller('GameBoardController', [

    'GRID.CONFIG',
    '$interval',
    '$scope',
    function (GRID, $interval, $scope) {
        var self = this;

        //Variables for the css 
        self.loseTheGame = false;
        self.nextLevel = false;


        //Variables of the game
        self.myScore = 0;
        self.myLevel = 0;
        self.generatedSequence = [];
        self.userSequence = [];
        self.gridBox = GRID.gridBox;
        self.generatedSequenceLocal = [];

        self.newGame = function ($index) {
            generateNewGame($index);
        };
        self.hasClicked = function ($index) {
            self.userSequence.push($index);
        };

        self.isDone = function isDone($index) {
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
                self.myLevel = self.myLevel + 1;
                self.myScore = self.myScore + 10;
                self.nextLevel = !self.nextLevel;

                colorsSequence($index);

            } else {
                self.loseTheGame = !result; //I'm asking to move the board
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
            self.stopInterval = $interval(function ($index) {
                self.heartbeatId = self.generatedSequenceLocal.shift()
                if (self.generatedSequenceLocal.length <= 0) {
                    $interval.cancel(self.stopInterval);
                }
            }, 1000);
        };
        function generateNewPosition() {
            var randomNumberGenerated = Math.floor(Math.random() * 15) + 0;
            var lastPosition = self.generatedSequence.length - 1


            if (self.generatedSequence[lastPosition] === randomNumberGenerated) {
                randomNumberGenerated = Math.floor(Math.random() * 15) + 0;
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