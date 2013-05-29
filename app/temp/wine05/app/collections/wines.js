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
	// return the current position of a name.
	currentPosition : function(paramName) {
		
		// cycle thru collection.
		// return the model in the collection.
		var currentWine = this.find(function(item) {
			if(item.get('name') === paramName) {
				return item;
			}
		});
		
		// return model
		return this.indexOf(currentWine);
	},
	// a helper method to remove an item from the collection.
	removeByName : function(paramName) {
		// cycle thru collection.
		var currentWine = this.find(function(item) {
			// console.log("item to remove : " + item.get('name') + " | ");
			// checks for a match for item in the collection.
			// and the param name.
			// if it matches, return the left side item.
			return item.get('name') === paramName;
		});
		
		// remove the wine.
		// i think this will return an error code if you need it.
		// not sure.
		return this.remove(currentWine);
	},
	// a helper method to update the name.
	updateByName : function(paramName, newParamName) {
		var self = this;	// need to stash the scope variable to use later.
		console.log("upate collection....");
		var updateCollection = [];
		
		// cycle thru collection.
		var currentWine = this.find(function(item) {
			// check if the model that you fetched is correct.
			if (item.get('name') === paramName) {
				// update the name attribute to what you set it to be.
				item.set({'name' : newParamName});

				// return updated model.
				// probably not needed. but you can use it to debug if needed.
				return item;
			}
		});
		
		return currentWine;
	}
	
});
