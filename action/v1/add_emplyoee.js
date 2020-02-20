module.exports = {

  name: "add_emplyoee",

  title: "Add Emplyoee",

  description: "",
  version: "v1",

  input:{
    title: "Add Emplyoee",
    type: "object",
    properties: {
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
      },
	  "gender":{
        "title":"Emplyoee gender",
         enum: ["Male", "Female"],
		  type: "string",
        "minLength":1,
        "description":"Enter the Emplyoee gender"
      },
	  "workEmail":{
        "title":"Emplyoee workEmail",
        "type":"string",
        "minLength":1,
        "description":"Enter the Emplyoee workEmail"
      },
	    "locatio":{
        "title":"Emplyoee address",
        "type":"string",
        "minLength":1,
        "description":"Enter the Emplyoee address"
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
	 fir=input.First;
	 lar=input.Last;
	 gen=input.gender;
	 loc=input.locatio;
	 mbl= input.workEmail;
    passwor = "x";
    url = "https://api.bamboohr.com/api/gateway.php/"+input.auth.subdom+"/v1/employees/";
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
	"lastName":lar ,
	"gender":gen,
	"workEmail":mbl,
	"location": loc
  },
  json: true
	 
     }
	 
	 
	 request(options, function (error, response, body) {
 
        output(null,{body:"SUCESSFULLY ADDED"});
		
});

  }

}
