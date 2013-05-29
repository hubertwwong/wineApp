wineApp

A series of test apps to learn backbone js. I added some features and copied
and pasted into a different directory.





Description of apps.


wine01:
Tried to get a basic backbone app up and running. Tried structing the code
into seperate files and tried to get something out on the browser.


wine02:
Restructured wine01 a little. Realized that backbone apps needed to be
created with new statement so I created the classes in its own object.
So app.CModel.Wine would be a wine model. You can init it and store it
int app.Model.someWine. I'm using using the app object as a name space
so it doesn't pollute the name space everything. 


wine03:
Moved the list of wines to a li item list and put an input field that you
actually add some wines into the list.


wine04: (broken)
I think a combination of git and google drive corrupted this. I don't feel
like fixing a throwaway project to learn. But it had a delete button that
would remove wines from the list. I was going to put in update function
but did a little digging to realize that I would have to put in some JS
into the HTML file which I thought was bad. Look at the underscore templates.
That seemd to have the same issues just using raw HTML. Handlebars among
other templates systems had {{}} directives that seem to work out better.
I picked handlebars since that what everyone seems to be using.


wine05:
Decided to use handle bars and added a simple handle bars template for
wine view. So now if you double click on the text field, you can edit and
update the field. Also added some collection code logic to handle this
feature. Clean up the views JS code so its using a consistent view.

Added helpers to handle bars so the boiler plate is put into a single place.

Added a JSON helper that was needed too. The basic thing that was needed
was an inject attribute function that the dom needed. I basically added
a {edit:true} or {edit:false} attribute to each JSON object so handle bars
can pick it up and use it to determine what field the user what updating.

Added test cases for the helpers. Using QUnit since that seemed to be
the easiest test system to try out.


wine06:
probably want to fix a bug.