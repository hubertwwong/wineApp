// fleshed out wine01 app a little more.
// change the objects so they use just one name space.
// so everything is under the app name space. now.
// also added a listener to the wine view so it listens to the collection for changes.

// init the wine app.
//$(document).ready(function() {

console.log('adding some test wines.');
	
// add some wine objects.
app.Models.firstWine = new app.CModels.Wine({
	 name : 'Clos Pegase'
});

app.Models.secondWine = new app.CModels.Wine({
	 name : '3 buck chuck'
});

// this is the actual collection.
app.Collections.wines = new app.CCollections.Wines();

// adding wines to the collection.
app.Collections.wines.add(app.Models.firstWine);
app.Collections.wines.add(app.Models.secondWine);

// app view.
// =======================================================================
app.Views.wineView = new app.CViews.WineView({
	collection: app.Collections.wines,
	el: 'ul',
	id: 'wineList'
});
app.Views.wineInput = new app.CViews.WineInput({
	collection: app.Collections.wines,
	el: 'input',
	id: 'wineInput'
});
	
//}); 
