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
		var currentWine = this.find(function(item, index) {
			// console.log("item to remove : " + item.get('name') + " | ");
			// checks for a match for item in the collection.
			// and the param name.
			// if it matches, return the left side item.
			console.log(index);
			if (item.get('name') === paramName) {
				item.set({'name' : paramName});
				//this.set = {index: item};
				//return item;
				updateCollection.push(new app.CModels.Wine({'name' : newParamName}));
			}
			else {
				updateCollection.push(item);
			}
		});
		
		_.each(this, function(item) {
			console.log("popping");
			console.log(item);
			self.pop();
		});
		_.each(updateCollection, function(item) {
			console.log("pushing");
			console.log(item);
			self.push(item);
		});
		
		// checking results.
		console.log(self);
		console.log(this);
		
		// update
		//console.log(wineIndex);
		
		console.log("wine collection");
		//this.set(updateCollection);
		//console.log(this);
		
		// testing push.
		//this.push(new app.CModels.Wine({'name' : 'foo'}))
		
		// remove the wine.
		// i think this will return an error code if you need it.
		// not sure.
		return currentWine;
	}
	
});
