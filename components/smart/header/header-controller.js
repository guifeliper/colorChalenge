angular.module('colourChallenge').controller('HeaderSiteController',[
    'headerService',
    function HeaderSiteController(GameManager){
        this.game = GameManager;
        this.currentScore = 1;
        this.highScore = 2;
    }
]);
