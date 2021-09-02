package org.stepdefinition;

import org.base.Baseclass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Loginstepdefinitionsfb extends Baseclass {
	
WebDriver driver;
		@Given("The user is in the facebook login page")
		public void the_user_is_in_the_facebook_login_page() {
			
			  driver.get("https://www.facebook.com/");
		}

		@When("The user validates using using invalid username and invalid password")
		public void the_user_validates_using_using_invalid_username_and_invalid_password() {
			WebElement email = driver.findElement(By.id("email"));
			   email.sendKeys("98556546455");
			   WebElement password = driver.findElement(By.id("pass"));
			   password.sendKeys("Cast@334");
		}

		@When("The user clicks the login button")
		public void the_user_clicks_the_login_button() {
			 WebElement loginbt = driver.findElement(By.xpath("//button[@name='login']"));
			 loginbt.click();
		}

		@Then("The invalid credentials page should be displayed")
		public void the_invalid_credentials_page_should_be_displayed() {
			System.out.println("invalid credentials");
		    
		}
		
		//scenario 2 
		@Given("The user is in the facebook page")
		public void theUserIsInTheFacebookPage() {
			  driver.get("https://www.facebook.com/");
		}

		@When("The user validates  using invalid username and valid password")
		public void theUserValidatesUsingInvalidUsernameAndValidPassword() {
			WebElement email = driver.findElement(By.id("email"));
			   email.sendKeys("9855654645");
			   WebElement password = driver.findElement(By.id("pass"));
			   password.sendKeys("Cast@334");
		}

		@When("The user clicks  on the login button")
		public void theUserClicksOnTheLoginButton() {
			 WebElement loginbt = driver.findElement(By.xpath("//button[@name='login']"));
			 loginbt.click();

		}

		@Then("The invalid credentials page must be displayed")
		public void theInvalidCredentialsPageMustBeDisplayed() {
			System.out.println("invalid credentials");
		    
		}


}
