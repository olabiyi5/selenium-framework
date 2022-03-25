package com.testing.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddingRadiantTeePO {
    //Element Locators
    @FindBy(className = "product-image-photo")
    public static WebElement RadiantTeeField;

    @FindBy(id = "option-label-size-157-item-171")
    public static WebElement SizeField;

    @FindBy(id = "option-label-color-93-item-50")
    public static WebElement ColourField;

    @FindBy(id = "qty")
    public static WebElement QtyField;

    @FindBy(id = "product-addtocart-button")
    public static WebElement AddToCartButton;


    // Initialise element to use selenium webdrier
    public AddingRadiantTeePO(WebDriver driver) {PageFactory.initElements(driver, this);
    }

    //Stage 3 - Methods to describe the web element action on web page
    public void clickRadiantTee(String RadiantTee){RadiantTeeField.click();
    }
    public void clickSizeField(String s){SizeField.click();
    }
    public void clickColourField(String Blue){ColourField.click();
    }
    public void clickQtyField(String Qty){QtyField.sendKeys(Qty);
    }

    public void clickAddToCartButton(){AddToCartButton.click();
    }



}
