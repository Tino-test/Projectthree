package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utilities.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources",glue="org.stepdefinition",monochrome=true,dryRun=false,plugin= { "pretty","html:C:\\Users\\DELL\\eclipse-workspace\\Cucumber099\\HTMLREPORT",
		"json:C:\\Users\\DELL\\eclipse-workspace\\Cucumber099\\JSONREPORT\\output.json","junit:C:\\Users\\DELL\\eclipse-workspace\\Cucumber099\\JUNITREPORT\\fb.xml",
		"rerun:C:\\Users\\DELL\\eclipse-workspace\\Cucumber099\\Failedscenarios\\failed.txt"},snippets=SnippetType.CAMELCASE/*tags= {"@sanity or @end2end"}*/)
public class Testrunner1 {
@AfterClass
public static void jvmgeneration() {
	
JvmReport.generateJvmReport("C:\\Users\\DELL\\eclipse-workspace\\Cucumber099\\JSONREPORT\\output.json");
}
}
