package org.rerunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="@C:\\Users\\DELL\\eclipse-workspace\\Cucumber099\\Failedscenarios\\failed.txt",glue="org.stepdefinition")
public class Testrerunnerclass {

}
