package com.testing.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class RegisteredCustomerLoginPO {
    // Stage 1 - Element Locators
    @FindBy(id = "email")
    public static WebElement EmailField;


    @FindBy(id = "pass")
    public static WebElement PassField;


    @FindBy(css = "#send2")
    public static WebElement SignInButton;


    //Stage 2 - Initialise element to use selenium webdriver
    public RegisteredCustomerLoginPO(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }


        //Stage 3- Method to describe the web element action on the web page

    public void enterEmail(String email){
        EmailField.sendKeys(email);

    }

    public void enterPass( String pass){
        PassField.sendKeys(pass);

    }

    public void clickSignInButton(){
        SignInButton.click();
    }







}

