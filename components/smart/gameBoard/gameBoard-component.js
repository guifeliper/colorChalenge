angular.module('colourChallenge').component('gameBoard',{
    bindings: {
        myScore: '=',
        loseTheGame: '='
    },
    controller: 'GameBoardController',
    templateUrl: 'components/smart/gameBoard/gameBoard.html'

});