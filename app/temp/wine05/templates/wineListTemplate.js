// handle bars templates.
// assuming jquery is being used.
app.CTemplates.WineList = (function () {
	var template, outputTag;
	// templateTag - selector for template. ususally in a script tag.
	// outputTag - selector for output template. usually a div or list.
	return {
		init : function(templateTag, outputTag) {
			console.log('template init - TemplateTag: ' + templateTag + " OutputTag: " + outputTag);
			this.templateTag = templateTag;
			this.outputTag = outputTag;
		},
		renderHTML : function(JSONData) {
			// fetch the template from html file.
			var src = $(this.templateTag).html();
			
			// compile said template.
			var template = Handlebars.compile(src);
			//console.log(aCollection.toJSON());
			
			// pass the compiled template with the data.
			var outputHTML = template(JSONData);
			console.log(outputHTML);
			
			// update the results.
			// hard code the results for now...
			// change it later.
			return $(this.outputTag).html(outputHTML);
		}
	}
});