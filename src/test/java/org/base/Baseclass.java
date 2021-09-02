package org.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Baseclass {

	public static WebDriver driver;
 public static void launchbrowser() {
		// TODO Auto-generated method stub
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
	}
 public static void maximizebrowser() {
	// TODO Auto-generated method stub
driver.manage().window().maximize();
}
 public static void closebrowser() {
	// TODO Auto-generated method stub
driver.quit();
}
 public static void fill(WebElement element,String text) {
	element.sendKeys(text); 
 }
 public static void btnclick(WebElement element) {
	 element.click();
 }

}
