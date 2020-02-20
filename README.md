# webmethods.io-BambooHR-Community-Connector
This is a Webmethods.io community connector for [BambooHR](https://en.wikipedia.org/wiki/BambooHR), a cloud-based human resources (HR) software service. The connector uses the [BambooHR REST API](https://documentation.bamboohr.com/reference#get-employee-dependents-1) to make HTTP requests to access or modify a resource. The actions supported by this community connector are:

#### 1. [Add an Employee Dependent](https://documentation.bamboohr.com/reference#add-employee-dependent-1)
#### 2. [Add Employee](https://documentation.bamboohr.com/reference#add-employee-1)
#### 3. [Change a Request Status](https://documentation.bamboohr.com/reference#time-off-change-a-request-status-1)
#### 4. [Estimate Future Time Off Balances](https://documentation.bamboohr.com/reference#estimate-future-time-off-balances)
#### 5. [Get a Benefit Coverage](https://documentation.bamboohr.com/reference#get-benefit-coverage-1)
#### 6. [Get a List of Who's Out](https://documentation.bamboohr.com/reference#get-a-list-of-whos-out-1)
#### 7. [Get all Employee Dependents](https://documentation.bamboohr.com/reference#get-employee-dependents-1)
#### 8. [Get Benefit Coverages](https://documentation.bamboohr.com/reference#get-benefit-coverages-1)
#### 9. [Get Benefit Deduction Types](https://documentation.bamboohr.com/reference#get-benefit-deduction-types-1)
#### 10. [Get Company Report](https://documentation.bamboohr.com/reference#get-company-report-1)
#### 11. [Get Employee Dependent](https://documentation.bamboohr.com/reference#get-employee-dependent-1)
#### 12. [Get Employee Details](https://documentation.bamboohr.com/reference#get-employee)
#### 13. [Get Employee Directory](https://documentation.bamboohr.com/reference#get-employees-directory-1)
#### 14. [Get Time Off Policies](https://documentation.bamboohr.com/reference#get-time-off-policies)
#### 15. [Get Time Off Requests](https://documentation.bamboohr.com/reference#time-off-get-time-off-requests-1)
#### 16. [Get Time Off Types](https://documentation.bamboohr.com/reference#get-time-off-types)
#### 17. [List Employee Files and Categories](https://documentation.bamboohr.com/reference#list-employee-files-1)
#### 18. [List Time Off Policies for a Employee](https://documentation.bamboohr.com/reference#time-off-list-time-off-policies-for-employee)
#### 19. [Request a Custom Report](https://documentation.bamboohr.com/reference#request-custom-report-1)
#### 20. [Update an Employee Dependent](https://documentation.bamboohr.com/reference#update-employee-dependent-1)
#### 21. [Update Employee](https://documentation.bamboohr.com/reference#update-employee)

Learn about other supported actions [here](https://documentation.bamboohr.com/reference).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
This connector requires any [Node](https://nodejs.org/dist/) version between 4.x.x and 8 .14.

Note: If you have installed any other Node version on your system, you can:
1. Use tools to switch between different versions of Node

  - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
  
  - For Mac, use [homebrew](https://brew.sh/).
2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).

The connector has been built with [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI tool, which must be installed. 

### Getting the API key 
To generate an API key, users should log in to their BambooHR account and click their name in the upper right-hand corner of any page to get to the user context menu. If they have sufficient permissions, there will be an "API Keys" option in that menu to go to the page. Each user may have one or more secret API keys that identify that user to the API.

### Installing
1. Clone the repo `https://github.com/yuvanmytri/webmethods.io-BambooHR-Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.

## Running the tests
To test, you can execute `wmio test`.

## Deployment
Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![BambooHR Connector](https://user-images.githubusercontent.com/16189220/74911246-3b403780-53e2-11ea-8789-be34e42a1d4f.png)

## Built With
Node v8.14.0 and [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI.

## Contributors
[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE) file for details
