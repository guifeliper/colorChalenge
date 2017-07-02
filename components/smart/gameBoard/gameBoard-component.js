angular.module('colourChallenge').component('gameBoard',{
    bindings: {
        myScore: '=',
        loseTheGame: '=',
        myBestValue: "="

    },
    controller: 'GameBoardController',
    templateUrl: 'components/smart/gameBoard/gameBoard.html'

});