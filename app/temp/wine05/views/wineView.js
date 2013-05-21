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
		// render call the render function.
		this.render();
		
		// collection event listeners.
		// basically listen for a change in collection.
		// and rerender the changes.
		this.collection.on('add remove change', this.render, this);
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
		
		// rebind event listener.s
		this.rebindViewEvents();
		
		// if you return this, you can chain views.
		return this;
	},
	
	// render helpers.
	// =======================================================================
	
	// uses handble bars to render a the list of wines.
	renderTemplate : function(aCollection) {
		var myWineList = new HandleBarsHelper();
		myWineList.init(this.options.templateTag, this.options.outputTag);
		myWineList.renderHTML(aCollection.toJSON());
	},
	
	// event helpers.
	// =======================================================================
	
	// rebinds the view event triggers.
	// you need this if you are redrawing the views.
	// when you redo the views, you delete the event listeners that were there.
	// you need to rebind them after you draw the view.
	rebindViewEvents : function() {
		this.$el = $('#wineOutputCollection ul');
		this.delegateEvents();
	}
});