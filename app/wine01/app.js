// init the wine app.
//$(document).ready(function() {
	
// add some wine objects.
var firstWine = new app.Models.Wine({
	 name : 'Clos Pegase'
});

var secondWine = new app.Models.Wine({
	 name : '3 buck ted'
});

// this is the actual collection.
var wines = new app.Collections.Wines();

// adding wines to the collection.
wines.add(firstWine);
wines.add(secondWine);

// app view.
// =======================================================================
var wineView = new app.Views.WineView({collection: wines});
	
//}); 
