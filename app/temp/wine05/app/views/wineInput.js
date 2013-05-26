/*
 * wine input
 * - handles the input to insert new wines.
 *
 * this.collection is the wine collection.
 * */
app.CViews.WineInput = Backbone.View.extend({
	initialize : function() {
		// render call the render function.
		console.log("wineInput");
		this.render();
	},
	events: {
        'keypress': 'eventWineItemKeyPress'
    },
	render : function() {
		// clears out the text box.
		this.$el.val('');
		
		// return this.
		// allows for chaining.
		return this;
	},
	
	// event handlers.
	// =======================================================================
	
	// checks for a key press function in the input box.
	// ignore everything except the enter button. '13'.
	eventWineItemKeyPress : function(e) {
		// check for enter. if its not that, just return.
		// otherwise, this function will just keep triggering.
		if (e.keyCode != 13) return;
        
        var textBoxName = $(e.target).val();
        
        // calls the collection add by name. 
        this.collection.addByName(textBoxName);
        
        // debug
		console.log('adding ' + textBoxName);
		
		// call render this when an item is added.
		this.render();
	}
});