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
  "line": 5,
  "name": "Create an account using valid email address",
  "description": "",
  "id": "account-management;create-an-account-using-valid-email-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cfirstname\u003e\", \"\u003clastname\u003e\", \"\u003cemail\u003e\", \"\u003cpassword\u003e\" and \"\u003cconfirmpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click create an account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "my account page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
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
      "line": 12,
      "id": "account-management;create-an-account-using-valid-email-address;;1"
    },
    {
      "cells": [
        "daniel",
        "dotun",
        "daniendotun@gmail.com",
        "Daniel123@",
        "Daniel123@"
      ],
      "line": 13,
      "id": "account-management;create-an-account-using-valid-email-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Create an account using valid email address",
  "description": "",
  "id": "account-management;create-an-account-using-valid-email-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    },
    {
      "line": 4,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"daniel\", \"dotun\", \"daniendotun@gmail.com\", \"Daniel123@\" and \"Daniel123@\"",
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
  "line": 8,
  "name": "user click create an account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "my account page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 179342595700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "daniel",
      "offset": 12
    },
    {
      "val": "dotun",
      "offset": 22
    },
    {
      "val": "daniendotun@gmail.com",
      "offset": 31
    },
    {
      "val": "Daniel123@",
      "offset": 56
    },
    {
      "val": "Daniel123@",
      "offset": 73
    }
  ],
  "location": "AccountManagementSteps.userEnterAnd(String,String,String,String,String)"
});
formatter.result({
  "duration": 7072070100,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickCreateAnAccount()"
});
formatter.result({
  "duration": 4173663800,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.myAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 340689900,
  "status": "passed"
});
});