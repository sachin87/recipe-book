//Meteor.subscribe('recipes');


Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function(){
		return self.subscribe('recipes');
	});
})

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
})


Template.Recipes.events({
  'click .new-recipe': function(){
  	Session.set('newRecipe', true);
  }
})