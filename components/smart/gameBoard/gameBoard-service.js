angular.module('colourChallenge').service('GameBoardService', [
    'GRID.CONFIG',
    function GameBoardService(GRID) {
        'use strict';
        var self = this;
        self.gridBox = GRID.gridBox;

       this.generateNewPosition = function generateNewPosition(generatedSequence) {
            var randomNumberGenerated = Math.floor(Math.random() * (self.gridBox.length - 1)) + 0;
            var lastPosition = generatedSequence.length - 1
            if (generatedSequence[lastPosition] === randomNumberGenerated) {
                randomNumberGenerated = Math.floor(Math.random() * (self.gridBox.length - 1)) + 0;
            }
            return randomNumberGenerated;
        }

        //I'm using this function to not get arrays by reference
        // I had a problem with that and I solve it in a dumb way
       this.getTheArrayValues = function getTheArrayValues(arrayForCopy) {
            var arrayCopied = [];
            for (var i = 0; i < arrayForCopy.length; i++) {
                arrayCopied.push(arrayForCopy[i]);
            }
            return arrayCopied;
        }
    }
]);