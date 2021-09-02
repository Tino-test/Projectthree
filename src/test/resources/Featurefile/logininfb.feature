@smoke
Feature: To validate the login functionality of the facebook page
@sanity
Scenario: To validate the login functionality using invalid username and invalid password

Given The user is in the facebook login page
When  The user validates using using invalid username and invalid password
And   The user clicks the login button
Then  The invalid credentials page should be displayed
 @end2end @sanity
 Scenario: To validate the login functionality using invalid username and valid password
 
 Given The user is in the facebook page
When  The user validates  using invalid username and valid password
And   The user clicks  on the login button
Then  The invalid credentials page must be displayed
 