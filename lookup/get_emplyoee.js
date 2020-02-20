// Add your function in module.exports

module.exports = {

  "name":"get_emplyoee",

  "label":"Get Emplyoee",
	// add input data lookup will depend on for
	// eg: if auth is oauth so add access_token inside auth object
	// you can also add other input properties which are mentioned in action/trigger
	"mock_input": {
		"auth": { }
	},
	"search": false,
  "execute": function (input, options, output){
  	// to access auth info use input.auth , eg: input.auth.username
  	// and to return output use output callback like this output(null, [{ id : "item_id", value : "Item Title"}])
  	// output should be an array of objects containing id and value keys.
    // your code goes here

    output(null, [
    	{
    		id : "item_1",
    		value : "Item 1"
    	},
    	{
    		id : "item_2",
    		value : "Item 2"
    	}
    ]);
  }

}