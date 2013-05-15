/*
 * wine input
 * - handles the input to insert new wines.
 *
 * this.collection is the wine collection.
 * */
app.CViews.WineInput = Backbone.View.extend({
	initialize : function() {
		// render call the render function.
		this.render();
	},
	events: {
        'keypress': 'addWineItem'
      },
	render : function() {
		// if you return this, you can chain views.
		return this;
	},
	addWineItem : function(e) {
		// check for enter. if its not that, just return.
		// otherwise, this function will just keep triggering.
		if (e.keyCode != 13) return;
        
        // adds to 
        this.collection.add(new app.CModels.Wine({name: $(e.target).val()}));
        
        // pulling input.
		console.log('adding ' + $(e.target).val());
	}
});