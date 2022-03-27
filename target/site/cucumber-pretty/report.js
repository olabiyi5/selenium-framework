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
  "line": 85,
  "name": "Registered customer be able to add item to cart",
  "description": "",
  "id": "account-management;registered-customer-be-able-to-add-item-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@AddingItemToCart(registered)"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "user login with a valid \"\u003cemail\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "user click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "user select an item from my account page \"\u003cwomen\u003e\",\"\u003cAugustaPulloverJacket\u003e\", \"\u003cJacket\u003e\" \"\u003cSize\u003e\",\"\u003cColour\u003e\",",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User click on AddTocart button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "user item should be successfully added to cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 92,
  "name": "",
  "description": "",
  "id": "account-management;registered-customer-be-able-to-add-item-to-cart;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "women",
        "AugustaPulloverJacket",
        "Jacket",
        "Size",
        "Colour"
      ],
      "line": 93,
      "id": "account-management;registered-customer-be-able-to-add-item-to-cart;;1"
    },
    {
      "cells": [
        "gbengaolabiyi5@gmail.com",
        "Olabiyi1993",
        "Women",
        "AugustaPulloverJacket",
        "Jacket",
        "s",
        "Blue"
      ],
      "line": 94,
      "id": "account-management;registered-customer-be-able-to-add-item-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 94,
  "name": "Registered customer be able to add item to cart",
  "description": "",
  "id": "account-management;registered-customer-be-able-to-add-item-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    },
    {
      "line": 84,
      "name": "@AddingItemToCart(registered)"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "user login with a valid \"gbengaolabiyi5@gmail.com\", \"Olabiyi1993\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "user click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "user select an item from my account page \"Women\",\"AugustaPulloverJacket\", \"Jacket\" \"s\",\"Blue\",",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User click on AddTocart button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "user item should be successfully added to cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "gbengaolabiyi5@gmail.com",
      "offset": 25
    },
    {
      "val": "Olabiyi1993",
      "offset": 53
    }
  ],
  "location": "AccountManagementSteps.userLoginWithAValid(String,String)"
});
formatter.result({
  "duration": 97530468999,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 1473687600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 42
    },
    {
      "val": "AugustaPulloverJacket",
      "offset": 50
    },
    {
      "val": "Jacket",
      "offset": 75
    },
    {
      "val": "s",
      "offset": 84
    },
    {
      "val": "Blue",
      "offset": 88
    }
  ],
  "location": "AccountManagementSteps.userSelectAnItemFromMyAccountPage(String,String,String,String,String)"
});
formatter.result({
  "duration": 9705394900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickOnAddTocartButton()"
});
formatter.result({
  "duration": 407909900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userItemShouldBeSuccessfullyAddedToCart()"
});
formatter.result({
  "duration": 92032199,
  "status": "passed"
});
});