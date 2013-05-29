/*
 * wine view.
 * - displays a list of wines.
 * 
 * things of note.
 * - need to pass a {collection: collectionObj} when you init the object.
 * */
app.CViews.WineView = Backbone.View.extend({
	initialize : function() {
		
		// event listeners
		this.collection.on('add remove', this.render, this);
		
		// need to add something here to bind multiple event listeners.
		
		// this.listenTo();
		//this.listenTo(this.model, 'change', this.render);
		
		// seeing the collection.
		//console.log(this.collection);
		//if (this.collection !== undefined) {
		//	console.log("ddddefined");
		//}
		//else {
		//	console.log("notdefined");
		//}
		
		// render call the render function.
		this.render();
	},
	render : function(aWineListParam) {
		// clear out the render..
		this.$el.empty();
		this.renderCollection(this.collection, this.$el);
		
		// if you return this, you can chain views.
		return this;
	},
	
	// render helpers.
	// =======================================================================
	
	// appending a view.
	renderCollection : function (aCollection, elem) {
		aCollection.each( function(model) {
			elem.append('<li>' + model.get('name') + '</li>');
			//console.log(model.get('name')); 
		});
	}
});