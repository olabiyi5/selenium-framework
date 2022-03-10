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
  "duration": 32967072600,
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
  "duration": 2427870600,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickCreateAnAccount()"
});
formatter.result({
  "duration": 2023902800,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.myAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 62900,
  "status": "passed"
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
        "daniel",
        "dotun",
        "daniendotun@gmail.com",
        "Daniel123@",
        "Daniel123@"
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
  "duration": 24301451900,
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
  "duration": 1901537800,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickCreateAnAccount()"
});
formatter.result({
  "duration": 2464773200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.errorMessageAccountAlreadyExistShouldBeDisplayed()"
});
formatter.result({
  "duration": 66900,
  "status": "passed"
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
        "daniendotun@gmail.com",
        "Danie123@"
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
  "name": "user enter \"daniendotun@gmail.com\" , \"Danie123@\"",
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
  "duration": 30974654200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "daniendotun@gmail.com",
      "offset": 12
    },
    {
      "val": "Danie123@",
      "offset": 38
    }
  ],
  "location": "AccountManagementSteps.userEnter(String,String)"
});
formatter.result({
  "duration": 1869845600,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickOnLogin()"
});
formatter.result({
  "duration": 1730272100,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.myAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Unregistered customer cannot login",
  "description": "",
  "id": "account-management;unregistered-customer-cannot-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@UnregisteredCustomerLogin"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enter \"\u003cemail\u003e\" , \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "error message that account does not exist should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "account-management;unregistered-customer-cannot-login;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 46,
      "id": "account-management;unregistered-customer-cannot-login;;1"
    },
    {
      "cells": [
        "daniendotun@gmail.com",
        "danie123"
      ],
      "line": 47,
      "id": "account-management;unregistered-customer-cannot-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Unregistered customer cannot login",
  "description": "",
  "id": "account-management;unregistered-customer-cannot-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    },
    {
      "line": 38,
      "name": "@UnregisteredCustomerLogin"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enter \"daniendotun@gmail.com\" , \"danie123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "error message that account does not exist should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnLoginPage()"
});
formatter.result({
  "duration": 50679874800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "daniendotun@gmail.com",
      "offset": 12
    },
    {
      "val": "danie123",
      "offset": 38
    }
  ],
  "location": "AccountManagementSteps.userEnter(String,String)"
});
formatter.result({
  "duration": 610234300,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickOnLogin()"
});
formatter.result({
  "duration": 2240904000,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.errorMessageThatAccountDoesNotExistShouldBeDisplayed()"
});
formatter.result({
  "duration": 71800,
  "status": "passed"
});
});