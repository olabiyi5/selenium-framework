package com.testing.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPagePO {
    // Stage 1 - Element Locators
    @FindBy(id = "firstname")
    public static WebElement FirstNameField;


        @FindBy (id = "lastname")
        public static WebElement LastNameField;

        @FindBy ( id = "email_address")
        public static WebElement EmailAddress;


        @FindBy (id= "password")
        public static WebElement PassWordField;

    @FindBy(name = "password_confirmation")
    public static WebElement PassWordConfirmationField;


    @FindBy(css = "#form-validate > div > div.primary > button > span")
    public static WebElement CreateAnAccountButton;





    //Stage 2 - Initialise element to use selenium webdriver
    public CreateAccountPagePO(WebDriver driver){
        PageFactory.initElements(driver, this);}


    //Stage 3 - Methods to describe the web element action on web page

    public void enterFirstName(String firstname){
        FirstNameField.sendKeys(firstname);

    }

    public void enterLastName(String lastname){
        LastNameField.sendKeys(lastname);

    }

    public void enterEmailAddress(String email){
        EmailAddress.sendKeys(email);
    }


    public void enterPassword(String password){
        PassWordField.sendKeys(password);


    }

    public void enterConfirmPassword(String ConfirmPassword){
        PassWordConfirmationField.sendKeys(ConfirmPassword);


    }

    public void clickcreateAccountbutton(){
        CreateAnAccountButton.click();
    }














}
