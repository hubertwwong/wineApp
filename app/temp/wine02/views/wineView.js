/*
 * wine view..
 * things of note.
 * - need to pass a {collection: collectionObj} when you init the object.
 * */
app.CViews.WineView = Backbone.View.extend({
	el: 'body',
	initialize : function() {
		
		// event listeners
		this.collection.on('add remove', this.render, this);
		
		// this.listenTo();
		//this.listenTo(this.model, 'change', this.render);
		
		// seeing the collection.
		console.log(this.collection);
		if (this.collection !== undefined) {
			console.log("ddddefined");
		}
		else {
			console.log("notdefined");
		}
		
		// render call the render function.
		this.render();
	},
	render : function(aWineListParam) {
		// clear out the render..
		this.$el.empty();
		this.$el.append("<h3>wines</h3>");
		this.renderCollection(this.collection, this.$el);
		// return this.
		return this;
	},
	
	// render helpers.
	// =======================================================================
	
	// appending a view.
	renderCollection : function (aCollection, elem) {
		aCollection.each( function(model) {
			elem.append('<h4>' + model.get('name') + '</h4>');
			console.log(model.get('name')); 
		});
	}
});