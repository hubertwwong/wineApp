/*
 * wine input
 * - handles the input to insert new wines.
 *
 * */
app.CViews.WineInput = Backbone.View.extend({
	el: 'input',
	id: 'wineInput',
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
		// check....
		if (e.keyCode != 13) return;
        //this.input = this.$('.edit');
		console.log($(e.target).val());
	}
});