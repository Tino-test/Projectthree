package org.stepdefinition;

import java.io.IOException;

import org.base.Baseclass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooksclass extends Baseclass {
WebDriver driver;
	@Before(order=1)
	public  void browserstart() {
		// TODO Auto-generated method stub
launchbrowser();
	}
	@Before(order=2)
	public void maxbrowser() {
		// TODO Auto-generated method stub
maximizebrowser();
	}
	@After(order=20)
	public void closingbrowser() {
		// TODO Auto-generated method stub
      closebrowser();
	}
	@After(order=19)
	public void afterscenario(Scenario s)throws IOException{
		// TODO Auto-generated method stub
if(s.isFailed()) {
	TakesScreenshot ts =(TakesScreenshot) driver;
	byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
	s.embed(screenshot,"image/png");
	
}
	}
	
}
