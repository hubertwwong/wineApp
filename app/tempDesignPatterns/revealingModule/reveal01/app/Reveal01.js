/*
 * reveal01
 * 
 * testing out reveal module pattern.
 * curious if you can new it or not to create other objects.
 * 
 * to init it
 * var foo = Reveal01();
 */
var Reveal01 = (function () {
	var cCount;
	
	var init = function(hello) {
		cCount = hello;
	};
	var inc = function() {
		cCount++;
	}
	var getCount = function() {
		return cCount;
	}
	
	// public functions.
	return {
		init : init,
		inc : inc,
		getCount : getCount
	}
});