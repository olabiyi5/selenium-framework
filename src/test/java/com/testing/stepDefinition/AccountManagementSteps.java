package com.testing.stepDefinition;

import com.testing.pageObject.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class  AccountManagementSteps {
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

        //Synchronization
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        //Page load
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);


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

        String expectedPageTitle = "My Account";
        String actualPageTitle = driver.getTitle();

        Assert.assertEquals(expectedPageTitle, actualPageTitle);

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
        String expectedPageTitle ="Create New Customer Account";
        String actualPageTitle = driver.getTitle();

        Assert.assertEquals(expectedPageTitle, actualPageTitle);



    }

    @Then("^error message that account does not exist should be displayed$")
    public void errorMessageThatAccountDoesNotExistShouldBeDisplayed() {
        String expectedPageTitle = "Customer Login";
        String actualPageTitle = driver.getTitle();

        Assert.assertEquals(expectedPageTitle,actualPageTitle);
    }


    @When("^user enter wrong \"([^\"]*)\" , \"([^\"]*)\"$")
    public void userEnterWrong(String email, String password) {
        AccountLockPO accountLockPO = new AccountLockPO(driver);
        accountLockPO.enterEmailAddress(email);
        accountLockPO.enterPass(password);

    }

    @Then("^error message that account has being locked should be displayed$")
    public void errorMessageThatAccountHasBeingLockedShouldBeDisplayed() {
        String expectedPageTitle= "Customer Login";
        String actualPageTitle= driver.getTitle();

    }


    @Given("^user is on the home page$")
    public void userIsOnTheHomePage() {
        //Define Browser
        WebDriverManager.chromedriver().setup();
        //Open the browser
        driver = new ChromeDriver();

        //maximize browser window
        driver.manage().window().maximize();

        //launch the application
        driver.get("https://magento2-demo.magebit.com/");

        //Synchronization
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        //Page load
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

        // To perform scroll on application
        JavascriptExecutor js =(JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1500)","");






    }


    @When("^user click on the item \"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\"$")
    public void userClickOnTheItem(String RadiantTee, String Size, String Qty, String Colour)  {
        AddingRadiantTeePO addingRadiantTeePO = new AddingRadiantTeePO(driver);
        addingRadiantTeePO.RadiantTeeField.click();
        addingRadiantTeePO.SizeField.click();
        addingRadiantTeePO.QtyField.sendKeys(Qty);
        addingRadiantTeePO.ColourField.click();
    }

    





    @And("^user click on Add to cart button$")
    public void userClickOnAddToCartButton() {
        AddingRadiantTeePO addingRadiantTeePO = new AddingRadiantTeePO(driver);
        addingRadiantTeePO.clickAddToCartButton();
        
    }

    @Then("^Your item has being successfully added to cart$")
    public void yourItemHasBeingSuccessfullyAddedToCart() {
        String expectedPageTitle= "Add to Cart";
        String actualPageTitle= driver.getTitle();
    }


    @Given("^user login with a valid \"([^\"]*)\", \"([^\"]*)\"$")
    public void userLoginWithAValid(String Email, String Password)  {
        //Define Browser
        WebDriverManager.chromedriver().setup();
        //Open the browser
        driver = new ChromeDriver();

        //maximize browser window
        driver.manage().window().maximize();

        //launch the application
        driver.get("https://magento2-demo.magebit.com/");

        //Synchronization
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        //Page load
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

        //click on sign in link
        HomePagePO homePagePO = new HomePagePO(driver);
        homePagePO.clickSignIn();

        AddingItemToCartPO addingItemToCartPO = new AddingItemToCartPO(driver);
        addingItemToCartPO.enterEmailAddress(Email);
        addingItemToCartPO.enterPass(Password);



    }

    @When("^user click on login button$")
    public void userClickOnLoginButton() {
        AddingItemToCartPO addingItemToCartPO = new AddingItemToCartPO(driver);
        addingItemToCartPO. clickSignInButton();


    }

    @And("^user select an item from my account page \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" \"([^\"]*)\",\"([^\"]*)\",$")
    public void userSelectAnItemFromMyAccountPage(String Women, String Size, String Jacket, String Colour, String AugustaPulloverField){
        AddingItemToCartPO addingItemToCartPO = new AddingItemToCartPO(driver);


    }

    @And("^User click on AddTocart button$")
    public void userClickOnAddTocartButton() {
        // To perform scroll on application
        JavascriptExecutor js =(JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,500)","");
        AddingItemToCartPO addingItemToCartPO = new AddingItemToCartPO(driver);
        addingItemToCartPO.clickAddToCartField();
    }


    @Then("^user item should be successfully added to cart$")
    public void userItemShouldBeSuccessfullyAddedToCart() {
        String expectedPageTitle= "Add to Cart";
        String actualPageTitle= driver.getTitle();
    }


    @And("^user select an item from my account page \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",$")
    public void userSelectAnItemFromMyAccountPage(String StellarSolarJacket, String colour, String size){
        CheckingOutOrderItemPO checkingOutOrderItemPO=new CheckingOutOrderItemPO(driver);
        checkingOutOrderItemPO.StellarSolarJacketField.click();
        checkingOutOrderItemPO.ColourField.click();
        checkingOutOrderItemPO.SizeField.click();


    }

    @And("^user click on the minicart$")
    public void userClickOnTheMinicart() {
        CheckingOutOrderItemPO checkingOutOrderItemPO=new CheckingOutOrderItemPO(driver);
        checkingOutOrderItemPO.clickMiniCartField();
    }



    @And("^user click on proceed to checkout button$")
    public void userClickOnProceedToCheckoutButton() {
        CheckingOutOrderItemPO checkingOutOrderItemPO=new CheckingOutOrderItemPO(driver);
        checkingOutOrderItemPO.clickProceedToCheckOutButtonField();
    }


    @And("^user fill all the contact details \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\" , \"([^\"]*)\"$")
    public void userFillAllTheContactDetails(String StreetAddress, String Country, String StateProvince, String City, String Zipcode, String PhoneNumber){
        CheckingOutOrderItemPO checkingOutOrderItemPO=new CheckingOutOrderItemPO(driver);
        checkingOutOrderItemPO.enterStreetAddressField(StreetAddress);
        checkingOutOrderItemPO.selectCountryField(Country);
        checkingOutOrderItemPO.selectStateProvinceField(StateProvince);
        checkingOutOrderItemPO.selectCityField(City);
        checkingOutOrderItemPO.enterZipPostalCodeField(Zipcode);
        checkingOutOrderItemPO.enterPhoneNumberField(PhoneNumber);

    }


    @And("^user click on a shipping method$")
    public void userClickOnAShippingMethod() {
        CheckingOutOrderItemPO checkingOutOrderItemPO=new CheckingOutOrderItemPO(driver);
        checkingOutOrderItemPO.clickShippingMethodField();


    }

    @And("^user click on the next button$")
    public void userClickOnTheNextButton() {
        CheckingOutOrderItemPO checkingOutOrderItemPO=new CheckingOutOrderItemPO(driver);
        checkingOutOrderItemPO.clickNextButtonField();


    }

    @When("^user click place an order button$")
    public void userClickPlaceAnOrderButton() {
        CheckingOutOrderItemPO checkingOutOrderItemPO=new CheckingOutOrderItemPO(driver);
        checkingOutOrderItemPO.clickPlaceOrderButton();



    }


    @Then("^User order has being successfully placed message should be displayed$")
    public void userOrderHasBeingSuccessfullyPlacedMessageShouldBeDisplayed() {
        String expectedPageTitle = "Checking out order";
        String actualPageTitle = driver.getTitle();

        Assert.assertEquals(expectedPageTitle,actualPageTitle);
    }




    }











