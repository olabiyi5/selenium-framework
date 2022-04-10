package com.testing.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckingOutOrderItemPO {
    //Element Locators
    @FindBy(className="product-item-link")
    public static WebElement StellarSolarJacketField;

    @FindBy(className = "level-top ui-corner-all")
    public static WebElement WomenField;


    @FindBy(id = "option-label-color-93-item-50")
    public static WebElement ColourField;

    @FindBy(id = "option-label-size-141-item-169")
    public static WebElement SizeField;

    @FindBy(id = "product-addtocart-button")
    public static WebElement AddToCartButtonField;

    @FindBy(css = "body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a")
    public static WebElement MiniCartField;

    @FindBy(id = "top-cart-btn-checkout")
    public static WebElement ProceedToCheckOutButton;

    @FindBy(id = "LQJKSC5")
    public static WebElement StreetAddressField;

    @FindBy(className = "select")
    public static WebElement CountryField;

    @FindBy(className = "select")
    public static WebElement StateProvinceField;

    @FindBy(className = "input-text")
    public static WebElement CityField;

    @FindBy(className = "input-text")
    public static WebElement ZipPostalCodeField;

    @FindBy(className = "input-text")
    public static WebElement PhoneNumberField;

    @FindBy(css="#checkout-shipping-method-load > table > tbody > tr > td:nth-child(1) > input")
    public static WebElement ShippingMethodField;

    @FindBy(className = "button action continue primary")
    public static WebElement NextButton;

    @FindBy(className = "action primary checkout")
    public static WebElement PlaceOrderButton;


    // Step 2 - Initialise element to use selenium webdriver
    public CheckingOutOrderItemPO(WebDriver driver) {PageFactory.initElements(driver, this);
    }

    //Stage 3 - Methods to describe the web element action on web page

    public void clickStellarSolarJacketField(String stellaSolarJacket){StellarSolarJacketField.click();
    }
    public void clickColourField(String colour){ColourField.click();}

    public void clickSizeField(String size){SizeField.click();}

    public void clickAddToCart(){AddToCartButtonField.click();}

    public void clickMiniCartField(){MiniCartField.click();}

    public void clickProceedToCheckOutButtonField(){ProceedToCheckOutButton.click();}

    public void enterStreetAddressField(String StreetAddress){StreetAddressField.sendKeys(StreetAddress);}

    public void selectCountryField(String Country){CountryField.click();}

    public void selectStateProvinceField(String StateProvince){StateProvinceField.click();}

    public void selectCityField(String City){CityField.click();}

    public void enterZipPostalCodeField(String ZipPostalCode){ZipPostalCodeField.sendKeys();}

    public void enterPhoneNumberField(String PhoneNumber){PhoneNumberField.sendKeys();}

    public void clickShippingMethodField(){ShippingMethodField.click();}

    public void clickNextButtonField(){NextButton.click();}

    public void clickPlaceOrderButton(){PlaceOrderButton.click();}













}
