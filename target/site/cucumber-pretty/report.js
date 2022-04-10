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
        "ayo",
        "dele",
        "ayodele123@gmail.com",
        "Sunday1993",
        "Sunday1993"
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
  "name": "user enter \"ayo\", \"dele\", \"ayodele123@gmail.com\", \"Sunday1993\" and \"Sunday1993\"",
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
  "duration": 112918362900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ayo",
      "offset": 12
    },
    {
      "val": "dele",
      "offset": 19
    },
    {
      "val": "ayodele123@gmail.com",
      "offset": 27
    },
    {
      "val": "Sunday1993",
      "offset": 51
    },
    {
      "val": "Sunday1993",
      "offset": 68
    }
  ],
  "location": "AccountManagementSteps.userEnterAnd(String,String,String,String,String)"
});
formatter.result({
  "duration": 4076998600,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickCreateAnAccount()"
});
formatter.result({
  "duration": 2090140100,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.myAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 74365200,
  "status": "passed"
});
});