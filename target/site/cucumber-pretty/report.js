$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountManagement.feature");
formatter.feature({
  "line": 2,
  "name": "Account management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Create an account using valid email address",
  "description": "",
  "id": "account-management;create-an-account-using-valid-email-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@DuplicateAccount"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enter \"\u003cfirstname\u003e\", \"\u003clastname\u003e\", \"\u003cemail\u003e\", \"\u003cpassword\u003e\" and \"\u003cconfirmpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user click create an account",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "error message account already exist should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "account-management;create-an-account-using-valid-email-address;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password",
        "confirmpassword"
      ],
      "line": 23,
      "id": "account-management;create-an-account-using-valid-email-address;;1"
    },
    {
      "cells": [
        "Gbenga",
        "olabiyi",
        "gbengaolabiyi6@gmail.com",
        "Dennis123",
        "Dennis123"
      ],
      "line": 24,
      "id": "account-management;create-an-account-using-valid-email-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Create an account using valid email address",
  "description": "",
  "id": "account-management;create-an-account-using-valid-email-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@DuplicateAccount"
    },
    {
      "line": 1,
      "name": "@AccountManagement"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enter \"Gbenga\", \"olabiyi\", \"gbengaolabiyi6@gmail.com\", \"Dennis123\" and \"Dennis123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user click create an account",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "error message account already exist should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 68765836400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gbenga",
      "offset": 12
    },
    {
      "val": "olabiyi",
      "offset": 22
    },
    {
      "val": "gbengaolabiyi6@gmail.com",
      "offset": 33
    },
    {
      "val": "Dennis123",
      "offset": 61
    },
    {
      "val": "Dennis123",
      "offset": 77
    }
  ],
  "location": "AccountManagementSteps.userEnterAnd(String,String,String,String,String)"
});
formatter.result({
  "duration": 7128018800,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickCreateAnAccount()"
});
formatter.result({
  "duration": 2197065900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.errorMessageAccountAlreadyExistShouldBeDisplayed()"
});
formatter.result({
  "duration": 31761200,
  "status": "passed"
});
});