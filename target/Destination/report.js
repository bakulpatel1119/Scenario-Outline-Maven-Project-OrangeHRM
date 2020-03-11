$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user enter \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "use enter \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "user should not able to login And user can see \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ]
    },
    {
      "cells": [
        "Abcd1",
        "xyz11",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Abcd1",
        "Admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Abcd1",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin",
        "xyz11",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "Admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "xyz11",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user enter \"Abcd1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enter \"xyz11\"",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.useEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not able to login And user can see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userShouldNotAbleToLoginAndUserCanSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user enter \"Abcd1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enter \"Admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.useEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not able to login And user can see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userShouldNotAbleToLoginAndUserCanSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user enter \"Abcd1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enter \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.useEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not able to login And user can see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userShouldNotAbleToLoginAndUserCanSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user enter \"Admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enter \"xyz11\"",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.useEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not able to login And user can see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userShouldNotAbleToLoginAndUserCanSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user enter \"Admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enter \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.useEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not able to login And user can see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userShouldNotAbleToLoginAndUserCanSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user enter \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enter \"Admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.useEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not able to login And user can see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userShouldNotAbleToLoginAndUserCanSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user enter \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enter \"xyz11\"",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.useEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not able to login And user can see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userShouldNotAbleToLoginAndUserCanSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user enter \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enter \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.useEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Orange1.MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not able to login And user can see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Orange1.MyStepdefs.userShouldNotAbleToLoginAndUserCanSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});