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
  "line": 51,
  "name": "Account to be locked after maximum of 5 attempt",
  "description": "",
  "id": "account-management;account-to-be-locked-after-maximum-of-5-attempt",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@AccountLock"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "user enter wrong \"\u003cemail\u003e\" , \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "error message that account has being locked should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "account-management;account-to-be-locked-after-maximum-of-5-attempt;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 58,
      "id": "account-management;account-to-be-locked-after-maximum-of-5-attempt;;1"
    },
    {
      "cells": [
        "sam123@gmail.com",
        "dennis123"
      ],
      "line": 59,
      "id": "account-management;account-to-be-locked-after-maximum-of-5-attempt;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 59,
  "name": "Account to be locked after maximum of 5 attempt",
  "description": "",
  "id": "account-management;account-to-be-locked-after-maximum-of-5-attempt;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    },
    {
      "line": 50,
      "name": "@AccountLock"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "user enter wrong \"sam123@gmail.com\" , \"dennis123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "error message that account has being locked should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnLoginPage()"
});
formatter.result({
  "duration": 64774345200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sam123@gmail.com",
      "offset": 18
    },
    {
      "val": "dennis123",
      "offset": 39
    }
  ],
  "location": "AccountManagementSteps.userEnterWrong(String,String)"
});
formatter.result({
  "duration": 1269224200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickOnLogin()"
});
formatter.result({
  "duration": 1726754600,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.errorMessageThatAccountHasBeingLockedShouldBeDisplayed()"
});
formatter.result({
  "duration": 181918700,
  "status": "passed"
});
});