package com.testing.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UnregisteredCustomerLogin {
    //Step 1 - Element Locators

    @FindBy(id = "email")
    public static WebElement EmailField;

    @FindBy(id = "pass")
    public static  WebElement PassField;

    @FindBy(css = "#send2")
    public static WebElement SignInButton;

    // Step 2 - Initialise element to use selenium webdriver
    public UnregisteredCustomerLogin(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    //Stage 3 - Methods to describe the web element action on web page

    public void enterEmailAddress(String email){
        EmailField.sendKeys(email);
    }

    public void enterPass( String pass){
        PassField.sendKeys(pass);

    }

    public void clickSignInButton(){
        SignInButton.click();
    }


}
