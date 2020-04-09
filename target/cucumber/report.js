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
  "name": "the page title should start with \"cheese\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefinition.checkTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});