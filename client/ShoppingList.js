Template.ShoppingList.onCreated(function() {
	var self = this;
	self.autorun(function(){
		return self.subscribe('recipes');
	});
})

Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Recipes.find({inMenu: true});
	}
})