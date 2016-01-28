//Meteor.subscribe('recipes');


Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		return self.subscribe('SingleRecipe', id);
	});
})

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
})