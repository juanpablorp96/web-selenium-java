$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/test.feature");
formatter.feature({
  "name": "New York Times Home Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Finding some cheese",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on the Google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefinition.I_visit_google()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"Cheese!\"",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepsDefinition.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should start with \"wrong\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefinition.checkTitle(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for stepDefinitions.MyStepsDefinition$1@68702e03 (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Globants-MacBook-Pro-5.local\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/_l/gkbz7mmx6f7...}, goog:chromeOptions: {debuggerAddress: localhost:61932}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0ddb8783a855e40d0e801ea627369deb\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat stepDefinitions.MyStepsDefinition.checkTitle(MyStepsDefinition.java:62)\n\tat ✽.the page title should start with \"wrong\"(./src/test/java/features/test.feature:6)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});