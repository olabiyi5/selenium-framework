package com.testing.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ActiveOrderPO {
    //Step 1 - Element Locators

    @FindBy(css = "Stellar Solar Jacket")
    public static WebElement StellarSolarJacketField;

    @FindBy(id = "option-label-color-93-item-50")
    public static WebElement BlueField;

    @FindBy(id = "option-label-size-141-item-169")
    public static WebElement MediumField;

    @FindBy(css = "Add to Cart")
    public static WebElement AddToCartButton;

    // Step 2 - Initialise element to use selenium webdriver
    public ActiveOrderPO(WebDriver driver) {PageFactory.initElements(driver, this);
    }

    //Stage 3 - Methods to describe the web element action on web page
    public void setStellarSolarJacketField(String StellarSolarJacket){StellarSolarJacketField.sendKeys(StellarSolarJacket);
    }
    public void setBlueField(String Blue){BlueField.sendKeys(Blue);
    }

    public void setMediumField(String Medium){MediumField.sendKeys(Medium);
    }
    public void clickAddToCartButton(){AddToCartButton.click();
    }


}
