package com.testing.pageObject;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DuplicateAccountPO {
    //Element Locators

    @FindBy(id ="firstname")
    public static WebElement FirstNameField;

    @FindBy(id ="lastname")
    public static WebElement LastNameField;

    @FindBy(id = "email_address")
    public static WebElement EmailField;

    @FindBy(id ="password" )
    public static WebElement PasswordField;

    @FindBy(id ="password-confirmation")
    public static WebElement PasswordConfirmationField;

    @FindBy(css = "#form-validate > div > div.primary > button")
    public static WebElement CreateAnAccountButton;


    //Stage 2 - Initialise element to use selenium webdriver
    public DuplicateAccountPO(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    //Stage 3 - Methods to describe the web element action on web page

    public void enterLastName(String lastname){
        LastNameField.sendKeys(lastname);

    }

    public void enterEmailAddress(String email){
        EmailField.sendKeys(email);
    }


    public void enterPassword(String password){
        PasswordField.sendKeys(password);

    }

    public void enterConfirmPassword(String ConfirmPassword){
        PasswordConfirmationField.sendKeys(ConfirmPassword);


    }

    public void clickcreateAccountbutton(){
        CreateAnAccountButton.click();
    }

}