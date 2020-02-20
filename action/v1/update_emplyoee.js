module.exports = {

  name: "update_emplyoee",

  title: "Update Emplyoee",

  description: "",
  version: "v1",

  input:{
    title: "Update Emplyoee",
    type: "object",
    properties: {
 "eid":{
        "title":"Emplyoee Id",
        "type":"string",
        "minLength":1,
        "description":"Enter the Emplyoee Id"
      },
	  "First":{
        "title":"Emplyoee First Name",
        "type":"string",
        "minLength":1,
        "description":"Enter the Emplyoee First Name"
      },
	  "Last":{
        "title":"Emplyoee Last Name",
        "type":"string",
        "minLength":1,
        "description":"Enter the Emplyoee Last Name"
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
	 fir=input.First;
	 lar=input.Last;
    username = input.auth.access_token;
    passwor = "x";
    url = "https://api.bamboohr.com/api/gateway.php/"+input.auth.subdom+"/v1/employees/"+input.eid;
    auth = "Basic " + new Buffer(username + ":" + passwor).toString("base64");

    var options = {
      "method": "POST",
      "url": url,
      "headers": {
          "Accept": "application/json",
		  "Content-Type": "application/json",
		   "authorization" : auth
         
      },
	 
	   body: {
    "firstName": fir,
	"lastName":lar 
  },
  json: true
     }
	 
	 
	 request(options, function (error, response, body) {
  
        output(null, {data:"SUCESSFULLY UPDATED"});
		
});
  }

}
