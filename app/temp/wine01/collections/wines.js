// collection.
app.Collections.Wines = Backbone.Collection.extend({
	Model : app.Models.Wine,
	url : "#",
	initialize : function() {
		// event listener. 
		//this.on('add remove', function() {
		//	console.log("added or remove from Wines.");
		//});
	}
});
