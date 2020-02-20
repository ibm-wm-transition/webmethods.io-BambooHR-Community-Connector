// Add your function in module.exports

module.exports = {

  "name":"takeoff_request",

  "label":"Takeoff Request",
	// add input data lookup will depend on for
	// eg: if auth is oauth so add access_token inside auth object
	// you can also add other input properties which are mentioned in action/trigger
	"mock_input": {
		"auth": { }
	},
	"search": true,
  "execute": function (input, options, output){
  	// to access auth info use input.auth , eg: input.auth.username
  	// and to return output use output callback like this output(null, [{ id : "item_id", value : "Item Title"}])
  	// output should be an array of objects containing id and value keys.
    // your code goes here
	 var request = require('request'),
    username = input.auth.access_token,
    passwor = "x",
    url = "https://api.bamboohr.com/api/gateway.php/"+input.auth.subdom+"/v1/time_off/requests/?start=1996-02-17&end=2050-02-21",
    auth = "Basic " + new Buffer(username + ":" + passwor).toString("base64");

    var options = {
      "method": "GET",
      "url": url,
      "headers": {
          "Accept": "application/json",
		  "Content-Type": "application/json",
		   "authorization" : auth
         
      }
	 
     }
	 
	 let lookupResult={
		results :[],
		next_page:false,
	}

	let arr =[]
	 request(options, function (error, response, body) {
  try {
            if (body && typeof(body) === "string") {
                body = JSON.parse(body);
            }
        } catch (e) {
            return output(body);
        };
		
		  if (response.statusCode === 403) {
            return output("the authentication information is incorrect.");
        }
		 if (response.statusCode === 400) {
            return output("there is an error in the construction of the request. The body of the response will contain more detail of the problem.");
        }
		if (response.statusCode === 404) {
            return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
        }
        if (response.statusCode !== 200) {
            return output("Authentication error");
        }
		 if (response.statusCode === 200) {
           
		   body.forEach(element => {
				  if (element) {
					  arr.push({
						  "id": String(element.id),
						  "value": String(element.name || element.id )
					  })
				  }
			  });
			  lookupResult.results = arr
					  return output(null, lookupResult)
		   
		   
		   
          
        }
        output(body);
		
});
  }

}