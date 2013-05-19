$(function(){

	// handle bars test.
	// ===========================================================================
	
	// Whatever you want to do after the wait
	var data = { "name": "Alan", "hometown": "Somewhere, TX",
	         "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
	var src = $('#header1').html();
	//var src = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
	//            	"{{kids.length}} kids:</p>" +
	//            	"<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
	console.log(src);
	var template = Handlebars.compile(src);
	var result = template(data);
	console.log(result);

});
//
// ========
