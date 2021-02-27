// The following exercise should be completed in vanilla JavaScript.

// Use https://api.vschool.io/pokemon as your url for your XHR request to get the big list of pokemon.

// It will be easiest to do this is steps:

// Step one - get the data
// Step two - display the data
// Step One
// Write a function that gets the JSON and parses the JSON to create an array of objects that look like this:

// {
//     name: 'Charmander',
//     resource_uri: 'api/v1/pokemon/8/'
// },
// {(Another pokemon object)},
// {(Another pokemon object)},
// {(Another pokemon object)},
// ...
// etc.
// Tip: You won't be able to use node for this, because XMLHttpRequest() only exists in a browser. So you'll need to use an HTML file that links to your JavaScript and run it in the browser.

// Step Two
// Make each Pokemon's name show up on a separate line in the browser.

// You will be using a for loop to iterate through each pokemon object, and some DOM mamnipulation to add nodes for each Pokemon.

// Extra Credit
// Display details about each pokemon

// Hints
// You'll need to manually create an XML HTTP Request and handle the readyState with onReadyStateChange.
// You'll need to use the built-in JavaScript JSON object to change the JSON into a useable JavaScript object. Check out the MDN Domcumentation on the global JSON object for more information and examples.
// The data that comes from the url endpoint above is complex. Notice that the "objects" property is an array, so you'll need to index into it's 1st item in order to get any of the pokemon names (data.objects[0]...);
// You'll need to use pure JavaScript to create and add an element to your HTML.