// init the wine app.
//$(document).ready(function() {
	
// add some wine objects.
app.Models.firstWine = new app.CModels.Wine({
	 name : 'Clos Pegase'
});

app.Models.secondWine = new app.CModels.Wine({
	 name : '3 buck ted'
});

// this is the actual collection.
app.Collections.wines = new app.CCollections.Wines();

// adding wines to the collection.
app.Collections.wines.add(app.Models.firstWine);
app.Collections.wines.add(app.Models.secondWine);

// app view.
// =======================================================================
app.Views.wineView = new app.CViews.WineView({collection: app.Collections.wines});
	
//}); 
