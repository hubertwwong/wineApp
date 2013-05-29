test( "hello", function() {
	deepEqual(true, true, "testing out hello");
});
test( "hello", function() {
	var a1 = new Reveal01();
	a1.init(2);
	var a2 = Reveal01();
	a2.init(10);
	
	deepEqual(2, a1.getCount(), "a1 starts at 2");
	a1.inc();
	deepEqual(3, a1.getCount(), "a1 inc to 3");
	deepEqual(10, a2.getCount(), "a2 starts at 10");
	a2.inc();
	deepEqual(3, a1.getCount(), "a1 stays at 3");
	deepEqual(11, a2.getCount(), "a2 starts at 11");
	
});