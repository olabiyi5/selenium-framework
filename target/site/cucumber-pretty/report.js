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
  "line": 28,
  "name": "Registered customer to login with their username and password",
  "description": "",
  "id": "account-management;registered-customer-to-login-with-their-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RegisteredCustomerLogin"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user enter \"\u003cemail\u003e\" , \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "my account page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "account-management;registered-customer-to-login-with-their-username-and-password;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 35,
      "id": "account-management;registered-customer-to-login-with-their-username-and-password;;1"
    },
    {
      "cells": [
        "ayodele123@gmail.com",
        "Sunday1993"
      ],
      "line": 36,
      "id": "account-management;registered-customer-to-login-with-their-username-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Registered customer to login with their username and password",
  "description": "",
  "id": "account-management;registered-customer-to-login-with-their-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    },
    {
      "line": 27,
      "name": "@RegisteredCustomerLogin"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user enter \"ayodele123@gmail.com\" , \"Sunday1993\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "my account page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnLoginPage()"
});
formatter.result({
  "duration": 72150618101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ayodele123@gmail.com",
      "offset": 12
    },
    {
      "val": "Sunday1993",
      "offset": 37
    }
  ],
  "location": "AccountManagementSteps.userEnter(String,String)"
});
formatter.result({
  "duration": 970726699,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickOnLogin()"
});
formatter.result({
  "duration": 10656333899,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.myAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 84528599,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[My Account]\u003e but was:\u003c[Customer Login]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.testing.stepDefinition.AccountManagementSteps.myAccountPageIsDisplayed(AccountManagementSteps.java:59)\r\n\tat ✽.Then my account page is displayed(AccountManagement.feature:32)\r\n",
  "status": "failed"
});
});