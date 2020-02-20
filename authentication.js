module.exports = {
  label: "Connect to BambooHR",
  mock_input: {},
  input: {
    type: "object",
    properties: {
      // fields schema
      // eg:
       access_token: {
         type: "string",
         minLength: 1,
         label: "API KEY"
       },
	    subdom: {
         type: "string",
         minLength: 1,
         label: "Sub Domain"
       }
    }
  },
  validate: function (input, output) {
    // auth data will be available in input.auth
    // like var username = input.auth.username
    // callback pattern
    // output(error, success)
    output(null, true);
  }
}