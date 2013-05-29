test( "hello", function() {
	deepEqual(true, true, "testing out hello");
});
test( "hello", function() {
	var a1 = Reveal02;
	a1.init(2);
	var a2 = Reveal02;
	a2.init(10);
	
	deepEqual(10, a1.getCount(), "a1 starts at 10");
	deepEqual(10, a2.getCount(), "a2 also starts at 10");
});