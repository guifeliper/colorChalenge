angular.module('colourChallenge').component('headerSite',{
    bindings: {
        myScore: '=',
        myBestValue: '=',
        loseTheGame: '='
    },
    controller: 'HeaderSiteController',
    templateUrl: 'components/smart/header/header.html'

});