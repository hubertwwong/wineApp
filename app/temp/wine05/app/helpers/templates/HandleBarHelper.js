/*
 * handle bars heloers.
 *
 * a simple helper puts the rendering of handle bars templates into 1 place.
 * 
 * to use.
 * 1. assign it to something.
 * 
 *   var foo = HandleBarsHelper();
 * 
 * 2. init it.
 *
 *   foo.init(scriptTag, outputTag);
 * 
 * scriptTag is the tag jquery can use to fetch the template element.
 * outputTag is the tag that jquery can use to fetch the output element.
 *
 * 3. run renderHTML()
 * 
 *   foo.renderHTML(yourJSONdata) 
 * 
 * this call handlebars.compile and appends the correct element to the tag
 * that you specify.
 */
var HandleBarsHelper = (function () {
	var cTemplate, cOutputTag, cInlineEditTag;
	// templateTag - selector for template. ususally in a script tag.
	// outputTag - selector for output template. usually a div or list.
	
	// note. if you don't specify a param, it will be undefined.
	var init = function(templateTag, outputTag, inlineEditTag) {
		cTemplateTag = templateTag;
		cOutputTag = outputTag;
		cInlineEditTag = inlineEditTag;
		//console.log('template init - TemplateTag: ' + templateTag + " OutputTag: " + outputTag + " inlineEditTag " + inlineEditTag);
	};
	var renderHTML = function(JSONData) {
		// consult...
		console.log("handle bars compile");
		console.log(JSONData);
		
		// fetch the template from html file.
		var src = $(cTemplateTag).html();
		
		// compile said template.
		var template = Handlebars.compile(src);
		//console.log(aCollection.toJSON());
		
		// pass the compiled template with the data.
		var outputHTML = template(JSONData);
		console.log(outputHTML);
		
		// update the results.
		// hard code the results for now...
		// change it later.
		return $(cOutputTag).html(outputHTML);
	};
	var renderHTML2 = function(JSONData) {
		// consult...
		console.log("handle bars compile");
		console.log(JSONData);
		
		// fetch the template from html file.
		var src = $(cTemplateTag).html();
		
		// compile said template.
		var template = Handlebars.compile(src);
		//console.log(aCollection.toJSON());
		
		// pass the compiled template with the data.
		var outputHTML = template(JSONData);
		console.log(outputHTML);
		
		// update the results.
		// hard code the results for now...
		// change it later.
		return $(cOutputTag).html(outputHTML);
	};
	
	// public functions.
	return {
		init : init,
		renderHTML : renderHTML,
		renderHTML2 : renderHTML2
	}
});