// collection.
app.CCollections.Wines = Backbone.Collection.extend({
	Model : app.CModels.Wine,
	url : "#",
	initialize : function() {
		// event listener. 
		//this.on('add remove', function() {
		//	console.log("added or remove from Wines.");
		//});
	},
	// add an item by name.
	addByName : function(item) {
		var newWine = new app.CModels.Wine({name: item});
		this.add(newWine);
	},
	// a helper method to remove an item from the collection.
	removeByName : function(item) {
		// find wine in the collection
		var currentWine = this.find(function(item) {
			console.log(item.get('name'));
        	return item.get('name');
		});
		
		// remove the wine.
		// i think this will return an error code if you need it.
		// not sure.
		return this.remove(currentWine);
	}
});
