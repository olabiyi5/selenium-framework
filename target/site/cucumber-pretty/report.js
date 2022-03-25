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
  "name": "user select an item from my account page \"\u003cwomen\u003e\",\"\u003cAugustaPulloverJacket\u003e\", \"\u003cJacket\u003e\" \"\u003cSize\u003e\",\"\u003cColour\u003e\", \"\u003cQty\u003e\"",
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
        "Colour",
        "Qty"
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
        "Blue",
        "1"
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
  "name": "user select an item from my account page \"Women\",\"AugustaPulloverJacket\", \"Jacket\" \"s\",\"Blue\", \"1\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
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
  "duration": 72242954300,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 1788225500,
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
    },
    {
      "val": "1",
      "offset": 96
    }
  ],
  "location": "AccountManagementSteps.userSelectAnItemFromMyAccountPage(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2806779300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable: element has zero size\n  (Session info: chrome\u003d99.0.4844.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-0GQV1BM\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.82, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49578}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 905acc5614ae302a084010641c1218df\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.testing.stepDefinition.AccountManagementSteps.userSelectAnItemFromMyAccountPage(AccountManagementSteps.java:254)\r\n\tat ✽.And user select an item from my account page \"Women\",\"AugustaPulloverJacket\", \"Jacket\" \"s\",\"Blue\", \"1\"(AccountManagement.feature:88)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickOnAddTocartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountManagementSteps.userItemShouldBeSuccessfullyAddedToCart()"
});
formatter.result({
  "status": "skipped"
});
});