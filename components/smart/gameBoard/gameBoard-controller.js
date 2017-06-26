angular.module('colourChallenge').controller('GameBoardController',[
    'GRID.CONFIG',
    function GameBoardController(GRID){
        var self = this;
        //DOM
        var nextPhase = document.getElementsByClassName("next-phase");
        
        //Variables for the css 
        self.loseTheGame = false;
        self.nextLevel = false;


        //Variables of the game
        self.myLevel = 0;
        self.generatedSequence = [];
        self.userSequence = [];
        self.gridBox = GRID.gridBox;

        var generatedSequenceLocal = [];

        self.newGame = function () {
            generatedSequenceLocal = [];
            generatedSequenceLocal.push(generateNewPosition());
            self.myLevel = 0;
            self.generatedSequence = [].concat(generatedSequenceLocal);
            self.userSequence = [];

            console.log("limpei");
            console.log(self.generatedSequence);
        };

        self.hasClicked = function ($index) {
            self.userSequence.push($index); 
        };


        self.isDone = function isDone (){
            var result = false;
            for (i = 0; i < self.userSequence.length; i++) { 
                if (self.generatedSequence[i] === self.userSequence[i]){
                    result = true
                }
                else{
                    result = false
                }
            }

            //If the statement is true we go to next level

            if(result === true){
                generatedSequenceLocal.push(generateNewPosition());
                self.generatedSequence = [].concat(generatedSequenceLocal);
                self.userSequence = [];
                self.myLevel = self.myLevel + 1;
                self.nextLevel = !self.nextLevel;
            }else{
                self.loseTheGame = !result; //I'm asking to move the board
            }
        }




        function generateNewPosition(){
            var randomNumberGenerated = Math.floor(Math.random() * 15) + 0;
            var lastPosition = self.generatedSequence.length - 1 
            
            
            if (self.generatedSequence[lastPosition] === randomNumberGenerated){
                randomNumberGenerated = Math.floor(Math.random() * 15) + 0;
            }
            return randomNumberGenerated;
            
        }
    }
]);
