test( "hello", function() {
	deepEqual(true, true, "testing out hello");
});
test("json inject", function() {
	// define models.
	var WineModel = Backbone.Model.extend();
	var WineCollection = Backbone.Collection.extend({
		model : WineModel
	})
	
	var firstWine = new WineModel({
		 name : 'Clos Pegase'
	});
	
	var secondWine = new WineModel({
		 name : '3 buck chuck'
	});
	
	// this is the actual collection.
	var wines = new WineCollection();
	
	// adding wines to the collection.
	wines.add(firstWine);
	wines.add(secondWine);
	
	// attributes
	var attribName = 'edit';
	var attribValue = false;
	
	// check the structure of JSON.
	console.log(wines.toJSON());
	var firstWineName = wines.toJSON()[0].name;
	deepEqual('Clos Pegase', firstWineName, "first wine should be Clos Pegase");
	
	// add edit : false attribute.
	var jsonHelper = new JSONInjectHelper();
	var wineResult = jsonHelper.addAttribute(wines.toJSON(), attribName, attribValue);
	var firstWineAttribute = wineResult[0].edit;
	deepEqual(false, firstWineAttribute, "after injection, edit attribute should be false");
});
test("json inject 2", function() {
	// define models.
	var WineModel = Backbone.Model.extend();
	var WineCollection = Backbone.Collection.extend({
		model : WineModel
	})
	
	var firstWine = new WineModel({
		 name : 'Clos Pegase'
	});
	
	var secondWine = new WineModel({
		 name : '3 buck chuck'
	});
	
	// this is the actual collection.
	var wines = new WineCollection();
	
	// adding wines to the collection.
	wines.add(firstWine);
	wines.add(secondWine);
	
	// attributes
	var attribName = 'edit';
	var attribValue = false;
	var secondaryArray = [1];
	var secondAttrib = true;
	
	// check the structure of JSON.
	console.log(wines.toJSON());
	var firstWineName = wines.toJSON()[0].name;
	deepEqual('Clos Pegase', firstWineName, "first wine should be Clos Pegase");
	
	// add edit : false attribute.
	var jsonHelper = new JSONInjectHelper();
	var wineResult = jsonHelper.addAttributeWith2Attributes(wines.toJSON(), attribName, attribValue, secondaryArray, secondAttrib);
	
	var firstWineAttribute = wineResult[0].edit;
	var secondWineAttribute = wineResult[1].edit;
	deepEqual(false, firstWineAttribute, "after injection, edit attribute should be false");
	deepEqual(true, secondWineAttribute, "after injection, edit attribute should be false");
});