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
		'click li .wineDelete' : 'eventWineDelete',
		'click li form .wineCancel' : 'eventWineCancel',
		'keypress li .wineUpdate' : 'eventWineUpdate',
		'dblclick li span' : 'eventDoubleClickText'
	},
	render : function() {
		// clear out the element.
		this.$el.empty();
		
		// inject the edit param to the json collection.
		var jsonCollectionWithAttrib = this.jsonInjectEditParam(this.collection.toJSON());
		
		// load template.
		this.renderTemplate(jsonCollectionWithAttrib);
		
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
	
	// event listeners
	// =======================================================================
	
	// checks for a click on the class wineDelete is the buttons with the x.
	// then calls the wineDelete function below.	
	eventWineDelete : function(e) {
		//console.log('removing ' + e.currentTarget.id);
		//console.log(e.currentTarget.id);
			
		// calling a helper that i made in the collection to remove a wine.
		var currentWine = this.collection.removeByName(e.currentTarget.id);
	},
	
	// checks to a click on the 'c' cancel button.
	// basically sets back the class variables to its default
	// and calls render function.
	eventWineCancel : function(e) {
		//console.log('canceling ' + e.currentTarget.id);
		// set the update text variables back to default
		this.cUpdateText = "";
		this.cUpdateTextPosition = -1;
		
		// update render.
		this.render();
	},
	
	// this checks key presses on the update field.
	// filters out all except the enter key.
	eventWineUpdate : function(e) {
		// check for enter. if its not that, just return.
		// otherwise, this function will just keep triggering.
		if (e.keyCode != 13) return;
    	var newWineName = e.target.value;
    	
		// update the collection values.
		this.collection.updateByName(this.cUpdateText, newWineName);
		
		// update the class variables to its default values.
		this.cUpdateText = "";
		this.cUpdateTextPosition = -1;
		
		// call the render again.
		this.render();
	},
	
	// using double click to edit.
	// convert the text you double click into a text field.		
	eventDoubleClickText :function(e) {
		var currentItem = e;
		var currentChild = currentItem.currentTarget.id;
		
		// update class variables.
		// after that call the render function again.
		// render function checks the class variables to see if you double clicked.
		this.cUpdateText = currentChild;
		this.cUpdateTextPosition = this.collection.currentPosition(currentChild);
		
		// fire off the render event.
		this.render();
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
	},
	
	// JSON helpers
	// =======================================================================
	
	// a simpler helper that updates the collection with an extra attribute.
	// attribute is called edit.
	// its either true or false.
	// defaults to false.
	// if its true, the handlebar template will pick it up and render a text box.
	// instead of normal text.
	jsonInjectEditParam : function(jsonCollection) {
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
		
		/// return the collection
		var aCollectionWithAttrib = JSONInjectHelper.addAttribute2(jsonCollection, attribName, attribValue, secondArray, secondAttrib);
		return aCollectionWithAttrib;
	}
	
});