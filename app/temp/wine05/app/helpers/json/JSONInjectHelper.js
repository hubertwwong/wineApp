/**
 * a simple javascript file that injects data into json data.
 * 
 * using underscore. so make sure that is available.
 */
var JSONInjectHelper = (function () {
	// adds a attribute to a JSON list.
	var addAttribute = function(aCollection, attribName, attribValue) {
		_.each(aCollection, function(item, i) {
			item[attribName] = attribValue;
			//console.log(item + " " + index);
		});
		
		return aCollection;
	}
	// adds a attribute to a JSON list.
	// a very generic way of doing this is to allow you pass attributes instead of one.
	// there is a default one and one that secondary attribute.
	// 
	// a simple use case is that you want edit a row in a collection.
	// set the default attribute to "edit : false" and the one you want to edit to "edit : true"
	// then, you can use the template engine to pick this up and render accordingly. 
	//
	// adds 2 other params for the second attribute.
	// - secondArray [a list of array positions that won't get the default attribute]
	//   assume its an array of ints.
	// - secondAttrib is the value you want to set if its in second array.
	var addAttribute2 = function(aCollection, attribName, attribValue, secondArray, secondAttrib) {
		_.each(aCollection, function(item, i) {
			var curentAttrib = attribValue;
			
			// checks if secondArray is in the current item.
			// if the array index match, use the secondary attributes.
			_.each(secondArray, function(secondItemIndex, j){
				if (secondItemIndex===i) {
					//console.log("fired");
					curentAttrib = secondAttrib;
				}	
			});
			
			// set the attribute.
			item[attribName] = curentAttrib;
			//console.log(item[attribName]);
		});
		
		return aCollection;
	}
	
	// public functions
	// =======================================================================
	return {
		addAttribute : addAttribute,
		addAttribute2 : addAttribute2 	
	}
	
})();