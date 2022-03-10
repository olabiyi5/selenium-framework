package com.testing.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagePO {

    // Stage 1 - Element Locators
    @FindBy(linkText = "Create an Account")
    public static WebElement CreateAccountLink;

    @FindBy(linkText = "Sign In")
    public static WebElement SignInLink;


    //Stage 2 - Initialise element to use selenium webdriver
    public HomePagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }


    //Stage 3 - Methods to describe the web element action on web page
    public void clickCreateAccount(){
        CreateAccountLink.click();

    }

    public void clickSignIn(){
        SignInLink.click();

    }



















}
