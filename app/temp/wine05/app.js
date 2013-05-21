// fleshed out wine04 app a little more.
// full use of handble bar templates.
// fixed the delete function.
// implementing of an update tag.
//
$(function(){

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
	app.Views.wineInput = new app.CViews.WineInput({
		collection: app.Collections.wines,
		el: 'input',
		id: 'wineInput'
	});
	app.Views.wineView = new app.CViews.WineView({
		collection: app.Collections.wines,
		el: 'ul',
		id: 'wineList',
		templateTag : '#wineListTemplate',
		outputTag : '#wineOutputCollection',
		eventTag: '#wineOutputCollection ul'
		
	});
	
});
//
// ========
