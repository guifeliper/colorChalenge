angular.module('colourChallenge').component('gridBox',{
    bindings: {
        listItems: '<',
        indexItem: '<'
    },
    controller: [
        '$timeout',
        '$scope',
        function ($timeout, $scope) {
        var self = this;
        
        this.$onChanges = function () {
            self.isActive = self.listItems.indexOf(self.indexItem) > -1;
        }
        
        $timeout(function () {
            self.isActive = false;
        }, 1000);
        
    }],
   templateUrl: 'components/ui/grid-box/grid-box.html' 
});