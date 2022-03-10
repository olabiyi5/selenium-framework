package com.testing.stepDefinition;

import com.testing.pageObject.CreateAccountPagePO;
import com.testing.pageObject.RegisteredCustomerLoginPO;
import com.testing.pageObject.DuplicateAccountPO;
import com.testing.pageObject.HomePagePO;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountManagementSteps {
    WebDriver driver;
    @Given("^user is on create an account page$")
    public void userIsOnCreateAnAccountPage() {
        //Define Browser
        WebDriverManager.chromedriver().setup();
        //Open the browser
        driver = new ChromeDriver();

        //maximize browser window
        driver.manage().window().maximize();

        //launch the application
        driver.get("https://magento2-demo.magebit.com/");

        //click on create an account link
        HomePagePO homePagePO = new HomePagePO(driver);
        homePagePO.clickCreateAccount();

    }

    @When("^user enter \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEnterAnd(String firstname, String lastname, String email, String password, String confirmpassword)  {
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterFirstName(firstname);
        createAccountPagePO.enterLastName(lastname);
        createAccountPagePO.enterEmailAddress(email);
        createAccountPagePO.enterPassword(password);
        createAccountPagePO.enterConfirmPassword(confirmpassword);

    }

    @And("^user click create an account$")
    public void userClickCreateAnAccount() {
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.clickcreateAccountbutton();

    }

    @Then("^my account page is displayed$")
    public void myAccountPageIsDisplayed() {

    }


    @Given("^user is on login page$")
    public void userIsOnLoginPage() {

        // Define Browser
        WebDriverManager.chromedriver().setup();
        // open the browser
        driver = new ChromeDriver();

        //maximize browser window
        driver.manage().window().maximize();


        //launch the application
        driver.get("https://magento2-demo.magebit.com/");

        //click on sign in link
        HomePagePO homePagePO = new HomePagePO(driver);
        homePagePO.clickSignIn();
        
    }

    @When("^user enter \"([^\"]*)\" , \"([^\"]*)\"$")
    public void userEnter(String email, String password) {
        RegisteredCustomerLoginPO registeredCustomerLoginPO = new RegisteredCustomerLoginPO(driver);
        registeredCustomerLoginPO.enterEmail(email);
        registeredCustomerLoginPO.enterPass(password);




    }

    @And("^user click on login$")
    public void userClickOnLogin() {
        RegisteredCustomerLoginPO registeredCustomerLoginPO = new RegisteredCustomerLoginPO(driver);
        registeredCustomerLoginPO. clickSignInButton();
    }


    @Then("^error message account already exist should be displayed$")
    public void errorMessageAccountAlreadyExistShouldBeDisplayed() {

    }

    @Then("^error message that account does not exist should be displayed$")
    public void errorMessageThatAccountDoesNotExistShouldBeDisplayed() {
    }
}






