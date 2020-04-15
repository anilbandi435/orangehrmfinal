$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("H:/eclipsejava/CTS_ORANGEHRM/src/test/resources/features/anil.feature");
formatter.feature({
  "line": 2,
  "name": "orangehrm website",
  "description": "",
  "id": "orangehrm-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#@tc_00_login"
    },
    {
      "line": 5,
      "value": "#Scenario Outline: validate the login"
    },
    {
      "line": 6,
      "value": "#Given I launched the browser"
    },
    {
      "line": 7,
      "value": "#When I enters the \"\u003cemail\u003e\" and \"\u003cpass\u003e\""
    },
    {
      "line": 8,
      "value": "#And I click login"
    },
    {
      "line": 9,
      "value": "#Then I am on the homePage"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#Examples:"
    },
    {
      "line": 12,
      "value": "#| email | pass     |"
    },
    {
      "line": 13,
      "value": "#| Admin | admin123 |"
    },
    {
      "line": 14,
      "value": "#| admin | Admin124 |"
    },
    {
      "line": 15,
      "value": "#| anil  | admin123 |"
    },
    {
      "line": 16,
      "value": "#"
    },
    {
      "line": 17,
      "value": "#@tc_02_functionality_of_directory_tab"
    },
    {
      "line": 18,
      "value": "#Scenario Outline: validating the click functionality of Directory tab"
    },
    {
      "line": 19,
      "value": "#Given i logged on to the OrangeHRM Home Page and navigate to the Directory Tab"
    },
    {
      "line": 20,
      "value": "#When i  enterd into directory tab by clicked on it \"\u003cemail1\u003e\" and \"\u003cpass1\u003e\""
    },
    {
      "line": 21,
      "value": "#Then search directory is displayed"
    },
    {
      "line": 22,
      "value": "#And directory tab is validated successfully"
    },
    {
      "line": 23,
      "value": "#"
    },
    {
      "line": 24,
      "value": "#Examples:"
    },
    {
      "line": 25,
      "value": "#| email1 | pass1    |"
    },
    {
      "line": 26,
      "value": "#| Admin  | admin123 |"
    },
    {
      "line": 27,
      "value": "#@tc_03_validate_search_in_directory_tab"
    },
    {
      "line": 28,
      "value": "#Scenario Outline: validating the search functionality in directory tab"
    },
    {
      "line": 29,
      "value": "#Given search directory is displayed inside the Directory Tab"
    },
    {
      "line": 30,
      "value": "#When i entered values to validate search directory \"\u003cemail2\u003e\" and \"\u003cpass2\u003e\" ,\"\u003cemp_name\u003e\""
    },
    {
      "line": 31,
      "value": "#Then i clicked on the search button"
    },
    {
      "line": 32,
      "value": "#And the result is dispalyed"
    },
    {
      "line": 33,
      "value": "#"
    },
    {
      "line": 34,
      "value": "#Examples:"
    },
    {
      "line": 35,
      "value": "#| email2 | pass2    | emp_name       |"
    },
    {
      "line": 36,
      "value": "#| Admin  | admin123 | Linda Anderson |"
    },
    {
      "line": 37,
      "value": "#"
    }
  ],
  "line": 39,
  "name": "requesting addons to the marketplace",
  "description": "",
  "id": "orangehrm-website;requesting-addons-to-the-marketplace",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@tc_04_requesting_addons_in_marketplace"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "i logged on to the OrangeHRM Home Page and navigate to the marketplace Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "orangehrm addons tab is displayed with multiple addons \"\u003cemail3\u003e\" and \"\u003cpass3\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "then i clicked on the request button for adding ldpa",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "enter the data to be added on addons",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click on ok",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "orangehrm-website;requesting-addons-to-the-marketplace;",
  "rows": [
    {
      "cells": [
        "email3",
        "pass3"
      ],
      "line": 47,
      "id": "orangehrm-website;requesting-addons-to-the-marketplace;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 48,
      "id": "orangehrm-website;requesting-addons-to-the-marketplace;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "requesting addons to the marketplace",
  "description": "",
  "id": "orangehrm-website;requesting-addons-to-the-marketplace;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@tc_04_requesting_addons_in_marketplace"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "i logged on to the OrangeHRM Home Page and navigate to the marketplace Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "orangehrm addons tab is displayed with multiple addons \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "then i clicked on the request button for adding ldpa",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "enter the data to be added on addons",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click on ok",
  "keyword": "Then "
});
formatter.match({
  "location": "Marketplacestep.i_logged_on_to_the_OrangeHRM_Home_Page_and_navigate_to_the_marketplace_Tab()"
});
formatter.result({
  "duration": 9007754000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 56
    },
    {
      "val": "admin123",
      "offset": 68
    }
  ],
  "location": "Marketplacestep.orangehrm_addons_tab_is_displayed_with_multiple_addons_and(String,String)"
});
formatter.result({
  "duration": 5611221900,
  "status": "passed"
});
formatter.match({
  "location": "Marketplacestep.then_i_clicked_on_the_request_button_for_adding_ldpa()"
});
formatter.result({
  "duration": 4364189500,
  "status": "passed"
});
formatter.match({
  "location": "Marketplacestep.enter_the_data_to_be_added_on_addons()"
});
formatter.result({
  "duration": 151264000,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027HARSHA-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\harsha\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:64744}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bf5b5f1f150a78c14e172a8cd7f2b260\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat anil.pages.Marketplace.enter_data(Marketplace.java:20)\r\n\tat anil.step_def.Marketplacestep.enter_the_data_to_be_added_on_addons(Marketplacestep.java:42)\r\n\tat ✽.And enter the data to be added on addons(H:/eclipsejava/CTS_ORANGEHRM/src/test/resources/features/anil.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Marketplacestep.click_on_ok()"
});
formatter.result({
  "status": "skipped"
});
});