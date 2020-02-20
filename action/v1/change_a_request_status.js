module.exports = {

  name: "change_a_request_status",

  title: "Change A Request Status",

  description: "",
  version: "v1",

  input:{
    title: "Change A Request Status",
    type: "object",
    properties: {
 "rid":{
        "title":"Request ID",
        "type":"string",
        "minLength":1
      },
	   "statu":{
        "title":"status",
        "type":"string",
		 enum: ["approved", "denied","declined","canceled"],
        "minLength":1
      },
	   "note":{
        "title":"note",
        "type":"string",
        "minLength":1,
		description: "Write a NOTE"
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
var url1 = "https://api.bamboohr.com/api/gateway.php/"+input.auth.subdom+"/v1/time_off/requests/1348/status";
   username = input.auth.access_token,
 //  format= input.formate,
  // includeNul=input.includeNul,
   value=input.note,
   statu= input.statu,
    passwor = "x",
auth = "Basic " + new Buffer(username + ":" + passwor).toString("base64");
var options = {
  method: 'PUT',
  url: url1,
  "headers": {
          "Accept": "application/json",
		  "Content-Type": "application/json",
		   "authorization" : auth
         
      },
  body: {"status":statu,"note":value},
  json: true
  
};

request(options, function (error, response, body) {	
		  if (response.statusCode === 403) {
            return output(null, {
			data:" the current user doesn't have access to change the status in this way."});
        }
		 if (response.statusCode === 400) {
            return output(null, {
			data:" the posted XML is invalid or the status is not approved, denied, canceled, or declined."});
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
				data: "The status has been updated."
			});
          
        }
        output(null, {
			data:"the authentication i"});
});
  }

}
