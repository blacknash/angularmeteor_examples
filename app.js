if( Meteor.isClient){
    angular
      .module('mexico', ['angular-meteor'])
      .controller('mainCtrl' , mainCtrl);


    function mainCtrl(){
      var main = this;
      main.number= 177618273681726381;

      main.people = [
        'Josue',
        'Xochitl',
        'Israel',
        'Pablo',
        'Carlos'
      ];
    }
}