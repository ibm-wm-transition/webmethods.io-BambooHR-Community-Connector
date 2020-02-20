module.exports = {

  name: "request_a_custom_report",

  title: "Request A Custom Report",

  description: "",
  version: "v1",

  input:{
    title: "Request A Custom Report",
    type: "object",
    properties: {
 "formate":{
        "title":"Emplyoee First Name",
        "type":"string",
		 enum: ["CSV", "XML","XLS","PDF","JSON"],
        "minLength":1,
        "description":"Enter the Emplyoee First Name"
      },
	  "title":{
        "title":"Title",
        "type":"string",
        "minLength":1
      },
	  
	   filter: {
        title: "Filter",
        displayTitle: "Filter",
        type: "object",
        properties: {
          includeNul: {
            title: "Include Null",
            displayTitle: "Include Null",
            type: "string",
            description: "Type yes|no"
          },
          value: {
            title: "Date last changed",
            displayTitle: "Date last changed",
            type: "string",
            description: "YYYY-MM-DD"
          },
        }
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
       var request = require("request");
var url1 = "https://api.bamboohr.com/api/gateway.php/"+input.auth.subdom+"/v1/reports/custom";
   username = input.auth.access_token,
   format= input.formate,
   includeNul=input.includeNul,
   value=input.value,
   title= input.title,
    passwor = "x",
auth = "Basic " + new Buffer(username + ":" + passwor).toString("base64");
var options = {
  method: 'POST',
  url: url1,
  qs: {format: format},
  "headers": {
          "Accept": "application/json",
		  "Content-Type": "application/json",
		   "authorization" : auth
         
      },
  body: {"title":title,"filters":{"lastChanged":{"includeNul":includeNul,"value":value}}},
  json: true
  
};

request(options, function (error, response, body) {	
		  if (response.statusCode === 403) {
            return output(null, {
			data:"the authentication information is incorrect."});
        }
		 if (response.statusCode === 400) {
            return output(null, {
			data:"there is an error in the construction of the request. The body of the response will contain more detail of the problem."});
        }
		if (response.statusCode === 404) {
            return output(null, {
			data:" the requested record could not be found. This may also occur if the user does not have access to the requested record"});
        }
        if (response.statusCode !== 200) {
            return output(null, {
			data:" the requested record could not be found. This may also occur if the user does not have access to the requested record"});
        }
		 if (response.statusCode === 200) {
            return output(null, {
				data: "Request Send sucessfully"
			});
          
        }
        output(null, {
			data:"the authentication i"});
});
  }

}
