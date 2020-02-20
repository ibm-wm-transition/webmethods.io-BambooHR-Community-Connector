module.exports = {
  name: "add_an_employee_dependent",

  title: "Add An Employee Dependent",

  description: "",
  version: "v1",

  input: {
    title: "Add An Employee Dependent",
    type: "object",
    properties: {
      id: {
        title: "id",
        type: "string",
        minLength: 1,
        description: "Employee Dependent ID"
      },
      employeeId: {
        title: "employeeId",
        type: "string"
      },
      firstName: {
        title: "firstName",
        type: "string"
      },
      middleName: {
        title: "middleName",
        type: "string"
      },
      lastName: {
        title: "lastName",
        type: "string"
      },
      relationship: {
        title: "relationship",
        type: "string"
      },
      gender: {
        title: "gender",
        type: "string"
      },
      ssn: {
        title: "ssn",
        type: "string"
      },
      dateOfBirth: {
        title: "dateOfBirth",
        type: "string"
      },
      addressLine1: {
        title: "addressLine1",
        type: "string"
      },
      addressLine2: {
        title: "addressLine2",
        type: "string"
      },
      city: {
        title: "city",
        type: "string"
      },
      state: {
        title: "state",
        type: "string"
      },
      zipCode: {
        title: "zipCode",
        type: "string"
      },
      homePhone: {
        title: "homePhone",
        type: "string"
      },
      country: {
        title: "country",
        type: "string"
      },
      isUsCitizen: {
        title: "isUsCitizen",
        type: "string"
      },
      isStudent: {
        title: "isStudent",
        type: "string"
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
      method: "POST",
      url:
        "https://api.bamboohr.com/api/gateway.php/" +
        input.auth.subdom +
        "/v1/employeedependents",
      headers: {
        Authorization:
          "Basic " +
          new Buffer(input.auth.access_token + ":" + "X").toString("base64"),
        "content-type": "application/json"
      },
      body: {
        employeeId: input.employeeId,
        firstName: input.firstName,
        middleName: input.middleName,
        lastName: input.lastName,
        relationship: input.relationship,
        gender: input.gender,
        ssn: input.ssn,
        dateOfBirth: input.dateOfBirth,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2,
        city: input.city,
        state: input.state,
        zipCode: input.zipCode,
        homePhone: input.homePhone,
        country: input.country,
        isUsCitizen: input.isUsCitizen,
        isStudent: input.isStudent
      },
      json: true
    };
    request(options, function(err, res, body) {
      if (err) return output(err);
      if (res && res.statusCode >= 200 && res.statusCode < 400)
        return output(null, { data: "Done!" });
    });
  }
};
