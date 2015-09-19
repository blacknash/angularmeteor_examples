People = new Mongo.Collection("people"); 

if( Meteor.isClient){
    angular
      .module('mexico', ['angular-meteor'])
      .controller('mainCtrl' , mainCtrl);

    mainCtrl.$inject = ['$meteor'];

    function mainCtrl($meteor){
      var main = this;
      main.number= 177618273681726381;

      main.people = $meteor.collection(People);
        
    }
}

if( Meteor.isServer){
  Meteor.startup( function(){

    if( People.find().count() == 0 ){
      var people = [
        {'name' : 'Xochitl', 'age': '27'},
        {'name' : 'Josue', 'age': '29'},
        {'name' : 'Israel', 'age': '30'},
      ];

      for(var i = 0 ;i < people.length ; i++){
        People.insert(people[i]);
      }
    }

  });
}