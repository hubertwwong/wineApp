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
		// local vars
		// these are used to store name and position of the variable of
		// text field when the user updates text. 
		this.cUpdateText = "";
		this.cUpdateTextPosition = -1;
		
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
			//console.log('removing ' + e.currentTarget.id);
			//console.log(e.currentTarget.id);
			
			// calling a helper that i made in the collection to remove a wine.
			var currentWine = this.collection.removeByName(e.currentTarget.id);
		},
		'click li form .wineCancel' : function(e) {
			//console.log('canceling ' + e.currentTarget.id);
			// set the update text variables back to default
			this.cUpdateText = "";
			this.cUpdateTextPosition = -1;
			
			//console.log(e.currentTarget.id);
			
			// calling a helper that i made in the collection to remove a wine.
			//var currentWine = this.collection.removeByName(e.currentTarget.id);
			
			// update render.
			this.render();
		},
		'keypress li .wineUpdate' : function(e) {
			// check for enter. if its not that, just return.
			// otherwise, this function will just keep triggering.
			if (e.keyCode != 13) return;
        	var newWineName = e.target.value;
        	
        	//console.log('updating event fired');
        	//console.log(e);
			//console.log(e.keyCode);
        	//console.log(e.target.value);
        	
			//console.log(e.currentTarget.id);
			
			// update the collection values.
			this.collection.updateByName(this.cUpdateText, newWineName);
			
			// update the class variables.
			this.cUpdateText = "";
			this.cUpdateTextPosition = -1;
			
			// call the render again.
			this.render();
		},
		// using double click to edit.
		'dblclick li span' : function(e) {
			var currentItem = $(e.target).val();
			var currentItem = e;
			//console.log(currentItem);
			//console.log(currentItem.currentTarget);
			var currentChild = currentItem.currentTarget.id;
			//console.log(currentChild);
			
			// steps.
			// 1. stash the text so you know what you are hunting for editing.
			// 2. stash the position in the collection.
			// 3. re reender.
			this.cUpdateText = currentChild;
			this.cUpdateTextPosition = this.collection.currentPosition(currentChild);
			//this.cUpdateTextPosition = 
			//console.log("editing " + this.cUpdateText + " at " + this.cUpdateTextPosition);
			
			// fire off the render event.
			this.render();
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
		var	secondArray = [];
		var secondAttrib = true;
		
		// checks to see if a row is being updated.
		// it it is,  add the position to the second array.
		// this values are set in the view event handlers above.
		if (this.cUpdateTextPosition !== -1) {
			secondArray = [this.cUpdateTextPosition];
		}
		
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