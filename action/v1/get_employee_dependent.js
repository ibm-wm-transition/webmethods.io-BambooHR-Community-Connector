module.exports = {
  name: "get_employee_dependent",

  title: "Get Employee Dependent",

  description: "",
  version: "v1",

  input: {
    title: "Get Employee Dependent",
    type: "object",
    properties: {
      dependent_id: {
        title: "dependent_id",
        type: "string",
        minLength: 1,
        description: "Employee id"
      }
    }
  },

  output: {
    title: "output",
    type: "object",
    properties: {}
  },

  mock_input: {},

  execute: function(input, output) {
    var request = require("request");
    var options = {
      method: "GET",
      url:
        "https://api.bamboohr.com/api/gateway.php/" +
        input.auth.subdom +
        "/v1/employeedependents/" +
        input.dependent_id,
      headers: {
        Authorization:
          "Basic " +
          new Buffer(input.auth.access_token + ":" + "X").toString("base64"),
        Accept: "application/json"
      }
    };

    request(options, function(err, res, body) {
      if (err) {
        return output(err);
      }
      if (typeof body == "string") {
        try {
          body = JSON.parse(body);
        } catch (err) {
          return output(body);
        }
      }
      if (res && res.statusCode >= 200 && res.statusCode < 400) {
        return output(null, body);
      } else if (res.statusCode == 403) {
        return output(
          "You don't have the necessary permissions to access this resource. Please ensure to select relevant scopes while creating the authorization and try again."
        );
      } else if (res.statusCode == 401) {
        return output(
          "Your authorization has expired. Please create a new authorization to continue. "
        );
      } else if (res.statusCode == 404) {
        return output(
          "Requested resource not found. Please check the input parameters or contact our customer support if the issue persists."
        );
      } else if (res.statusCode == 500) {
        return output(
          "Something went wrong at server. Please try again after some time."
        );
      } else if (res.statusCode == 503) {
        return output(
          "Something went wrong. Please try again after some time."
        );
      } else if (res.statusCode == 504) {
        return output(
          "The server took too long to respond. Please try again after some time."
        );
      } else if (res.statusCode == 400) {
        return output(body);
      } else {
        if (body && body.err && body.err.message) {
          return output(body.err.message);
        } else {
          return output(body);
        }
      }
    });
  }
};
