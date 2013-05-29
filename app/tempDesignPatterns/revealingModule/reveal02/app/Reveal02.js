/*
 * reveal02
 * 
 * testing out reveal module pattern.
 * this is another version and the only difference is that it self executes so
 * it self executes and it returns an object. this is useful for utility
 * classes where you just need one instance.
 * 
 * to init it
 * var foo = Reveal01();
 */
var Reveal02 = (function () {
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
})();