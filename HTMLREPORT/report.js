$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Featurefile/logininfb.feature");
formatter.feature({
  "name": "To validate the login functionality of the facebook page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "To validate the login functionality using invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in the facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefinitionsfb.the_user_is_in_the_facebook_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefinition.Loginstepdefinitionsfb.the_user_is_in_the_facebook_login_page(Loginstepdefinitionsfb.java:20)\r\n\tat ✽.The user is in the facebook login page(file:src/test/resources/Featurefile/logininfb.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user validates using using invalid username and invalid password",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefinitionsfb.the_user_validates_using_using_invalid_username_and_invalid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefinitionsfb.the_user_clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The invalid credentials page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefinitionsfb.the_invalid_credentials_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefinition.Hooksclass.afterscenario(Hooksclass.java:35)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To validate the login functionality using invalid username and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@end2end"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in the facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefinitionsfb.theUserIsInTheFacebookPage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefinition.Loginstepdefinitionsfb.theUserIsInTheFacebookPage(Loginstepdefinitionsfb.java:46)\r\n\tat ✽.The user is in the facebook page(file:src/test/resources/Featurefile/logininfb.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user validates  using invalid username and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefinitionsfb.theUserValidatesUsingInvalidUsernameAndValidPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks  on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefinitionsfb.theUserClicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The invalid credentials page must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefinitionsfb.theInvalidCredentialsPageMustBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefinition.Hooksclass.afterscenario(Hooksclass.java:35)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});