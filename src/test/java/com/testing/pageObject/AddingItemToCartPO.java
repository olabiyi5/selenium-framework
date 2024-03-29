package com.testing.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddingItemToCartPO {
    //Element Locators
    @FindBy(id = "email")
    public static WebElement EmailField;


    @FindBy(id = "pass")
    public static WebElement PassField;


    @FindBy(css = "#send2")
    public static WebElement SignInButton;

    @FindBy(id = "ui-id-4")
    public static WebElement WomenField;


   @FindBy(css = "#maincontent > div.columns > div.sidebar.sidebar-main > div > div > ul:nth-child(2) > li:nth-child(2) > a")
    public static WebElement JacketField;

    @FindBy(css = "#product-item-info_1260 > a > span > span > img")
    public static WebElement AugustaPulloverJacketField;

    @FindBy(id = "option-label-size-157-item-171")
    public static WebElement SizeField;

    @FindBy(id = "option-label-color-93-item-50")
    public static WebElement ColourField;

    @FindBy(id = "product-addtocart-button")
    public static WebElement AddToCartButtonField;



    // Step 2 - Initialise element to use selenium webdriver
    public AddingItemToCartPO(WebDriver driver) {PageFactory.initElements(driver, this);
    }


    //Stage 3 - Methods to describe the web element action on web page

    public void enterEmailAddress(String email){
        EmailField.sendKeys(email);
    }

    public void enterPass( String pass){PassField.sendKeys(pass);}

    public void clickSignInButton(){
        SignInButton.click();
    }

    public void clickWomenField(String Women){WomenField.click();}

    public void clickJacketField(String Jacket){JacketField.click();}

    public void clickAugustaPulloverJacketField(String AugustaPulloverJacket){AugustaPulloverJacketField.click();}

    public void clickSizeField(String Size){SizeField.click();}

    public void clickColourField(String Colour){ColourField.click();}

   public void clickAddToCartField(){AddToCartButtonField.click();}






}
