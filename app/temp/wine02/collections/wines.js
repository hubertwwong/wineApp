// collection.
app.CCollections.Wines = Backbone.Collection.extend({
	Model : app.CModels.Wine,
	url : "#",
	initialize : function() {
		// event listener. 
		//this.on('add remove', function() {
		//	console.log("added or remove from Wines.");
		//});
	}
});
