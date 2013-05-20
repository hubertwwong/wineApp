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
        'keypress': 'addWineItem'
    },
	render : function() {
		this.$el.val('');
		return this;
	},
	addWineItem : function(e) {
		// check for enter. if its not that, just return.
		// otherwise, this function will just keep triggering.
		if (e.keyCode != 13) return;
        
        // calls the collection add by name. 
        this.collection.addByName($(e.target).val());
        
        // debug
		console.log('adding ' + $(e.target).val());
		
		// call render this when an item is added.
		this.render();
	}
});