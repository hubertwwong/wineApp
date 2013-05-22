/*
 * wine view.
 * - displays a list of wines.
 * 
 * things of note.
 * - need to pass a {collection: collectionObj} when you init the object.
 * 
 * options
 * 
 * templateTag
 * - selector that jquery can use to select the script template to compile.
 * outputTag
 * - selector that jquery can use to output the results of the template.
 * eventTag
 * - selector that backbone uses to bind events.
 * */
app.CViews.WineView = Backbone.View.extend({
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
			console.log(currentItem.currentTarget);
			var currentChild = currentItem.currentTarget.id;
			console.log(currentChild);
		}
	},
	render : function() {
		// clear out the element.
		this.$el.empty();
		
		// add json attribute.
		// edit : true or edit : false
		// 
		var attribName = 'edit';
		var attribValue = false;
		var	secondArray = [0];
		var secondAttrib = true;
		var aCollectionWithAttrib = JSONInjectHelper.addAttribute2(this.collection.toJSON(), attribName, attribValue, secondArray, secondAttrib);
		
		// load template.
		this.renderTemplate(aCollectionWithAttrib);
		
		// rebind event listener.s
		this.rebindViewEvents();
		
		// if you return this, you can chain views.
		return this;
	},
	
	// render helpers.
	// =======================================================================
	
	// uses handble bars to render a the list of wines.
	renderTemplate : function(jsonCollection) {
		var myWineList = HandleBarsHelper();
		myWineList.init(this.options.templateTag, this.options.outputTag);
		myWineList.renderHTML(jsonCollection);
	},
	
	// event helpers.
	// =======================================================================
	
	// rebinds the view event triggers.
	// you need this if you are redrawing the views.
	// when you redo the views, you delete the event listeners that were there.
	// you need to rebind them after you draw the view.
	rebindViewEvents : function() {
		this.$el = $(this.options.eventTag);
		this.delegateEvents();
	}
	
});