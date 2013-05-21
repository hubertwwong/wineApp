/*
 * wine view.
 * - displays a list of wines.
 * 
 * things of note.
 * - need to pass a {collection: collectionObj} when you init the object.
 * */
app.CViews.WineView = Backbone.View.extend({
	el: 'ul',
	id: 'wineList',
	initialize : function() {
		console.log('tags');
		console.log(this.options.templateTag);
		console.log(this.options.outputTag);
		
		// render call the render function.
		this.render();
		
		// event listeners.
		// collection events. basically listen for a change in collection.
		// and rerender the changes.
		this.collection.on('add remove change', this.render, this);

		// might have to rebind because you have to bind after handle bars renders the image.
		console.log("wineList");
		this.$el = $('#wineOutputCollection ul');
		//this.el = document;
		//console.log("WineView");
		//console.log(this.$el);		
	},
	// view listener.
	events : {
		// checks for a click on the class wineDelete is the buttons with the x.
		// then calls the wineDelete function below.
		'click li .wineDelete' : function(e) {
			console.log('removing ' + e.currentTarget.id);
			console.log(e.currentTarget.id);
			
			// calling a helper that i made in the collection to remove a wine.
			var currentWine = this.collection.removeByName(e.currentTarget.id);
		},
		// using double click to edit.
		'dblclick li' : function(e) {
			//var currentItem = $(e.target).val();
			console.log("aaaa");
			var currentItem = e;
			console.log(currentItem);
			var currentChild = currentItem.currentTarget.id;
			console.log(currentChild);
		}
	},
	render : function() {
		// clear out the render..
		this.$el.empty();
		
		// load template.
		this.renderTemplate(this.collection);
		
		// if you return this, you can chain views.
		return this;
	},
	
	// render helpers.
	// =======================================================================
	renderTemplate : function(aCollection) {
		var myWineList = new HandleBarsHelper();
		myWineList.init(this.options.templateTag, this.options.outputTag);
		myWineList.renderHTML(aCollection.toJSON());
	}
	
});