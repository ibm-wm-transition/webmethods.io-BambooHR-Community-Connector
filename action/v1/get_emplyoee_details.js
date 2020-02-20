module.exports = {

  name: "get_emplyoee_details",

  title: "Get Emplyoee Details",

  description: "",
  version: "v1",

  input:{
    title: "Get Emplyoee Details",
    type: "object",
    properties: {
"eid":{
        "title":"Emplyoee Id",
        "type":"string",
        "minLength":1,
        "description":"Enter the Emplyoee Id"
      }
    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{},

  execute: function(input, output){
  var request = require('request');
    username = input.auth.access_token;
    passwor = "x";
    url = "https://api.bamboohr.com/api/gateway.php/"+input.auth.subdom+"/v1/employees/"+input.eid+"/?fields=firstName%2ClastName%2Cgender%2Clocation%2CjobTitle%2Cnationality%2CworkEmail";
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
            return output(body.status.errorDetails);
        }
		 if (response.statusCode === 200) {
            return output(null, {
				data: body
			});
          
        }
        output(body);
		
});
  }

}
