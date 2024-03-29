@AccountManagement
Feature: Account management

  @CreateAccount
  Scenario Outline: Create an account using valid email address
    Given user is on create an account page
    When user enter "<firstname>", "<lastname>", "<email>", "<password>" and "<confirmpassword>"
    And user click create an account
    Then my account page is displayed

    Examples:
      | firstname | lastname | email                | password   | confirmpassword |
      | ayo       | dele     | ayodele123@gmail.com | Sunday1993 | Sunday1993      |

  @DuplicateAccount
  Scenario Outline: Create an account using valid email address
    Given user is on create an account page
    When user enter "<firstname>", "<lastname>", "<email>", "<password>" and "<confirmpassword>"
    And user click create an account
    Then error message account already exist should be displayed

    Examples:
      | firstname | lastname | email                | password   | confirmpassword |
      | ayo       | dele     | ayodele123@gmail.com | Sunday1993 | Sunday1993      |


  @RegisteredCustomerLogin
  Scenario Outline: Registered customer to login with their username and password
    Given user is on login page
    When  user enter "<email>" , "<password>"
    And user click on login
    Then my account page is displayed

    Examples:
      | email                | password   |
      | ayodele123@gmail.com | Sunday1993 |

  @UnregisteredCustomerLogin
  Scenario Outline: Unregistered customer cannot login
    Given  user is on login page
    When user enter "<email>" , "<password>"
    And user click on login
    Then error message that account does not exist should be displayed

    Examples:
      | email            | password |
      | sam123@gmail.com | danie123 |


  @AccountLock
  Scenario Outline: Account to be locked after maximum of 5 attempt
    Given user is on login page
    When user enter wrong "<email>" , "<password>"
    And user click on login
    Then error message that account has being locked should be displayed

    Examples:
      | email            | password  |
      | sam123@gmail.com | dennis123 |

  @ActiveOrder
  Scenario Outline: Customer should have an active order
    Given user is on my account page
    When user create an order "<jacket>" , "<Size>","<colour>"
    And user click on my order
    Then active order should be displayed

    Examples:
      | jacket             | Size   | colour |
      | StellarSolarJacket | Medium | Blue   |

  @AddingRadiantTeeToCart
  Scenario Outline: Unregistered customer should be able to add items to cart
    Given user is on the home page
    When user click on the item "<RadiantTee>","<Size>" , "<Qty>" ,"<Colour>"
    And user click on Add to cart button
    Then Your item has being successfully added to cart


    Examples:
      | RadiantTee | Size | Qty | Colour |
      | RadiantTee | s    | 1   | Blue   |

  @AddingItemToCart(registered)
  Scenario Outline: Registered customer be able to add item to cart
    Given user login with a valid "<email>", "<password>"
    When user click on login button
    And user select an item from my account page "<women>","<AugustaPulloverJacket>", "<Jacket>" "<Size>","<Colour>",
    And User click on AddTocart button
    Then user item should be successfully added to cart

    Examples:
      | email                    | password    | women | AugustaPulloverJacket | Jacket | Size | Colour |
      | gbengaolabiyi5@gmail.com | Olabiyi1993 | Women | AugustaPulloverJacket | Jacket | s    | Blue   |


  @CheckingOutOrderItem
  Scenario Outline: Registered customer should be able to check out ordered items from cart
    Given user login with a valid "<email>", "<password>"
    When user click on login
    And user select an item from my account page "<women>","<Jacket>" "<Hera Pullover Hoodie>", "<Colour>", "<Size>",
    And User click on AddTocart button
    And user click on the minicart
    And user click on proceed to checkout button
    And user fill all the contact details "<street address>", "<country>", "<state/province>" , "<City>", "<zipcode>" , "<phone number>"
    And user click on a shipping method
    And user click on the next button
    When user click place an order button
    Then User order has being successfully placed message should be displayed

    Examples:
      | email                    | password    |Hera Pullover Hoodie | Colour | Size | street address    | country   | state/province | City     | zipcode | phone number |
      | gbengaolabiyi5@gmail.com | Olabiyi1993 | Hera Pullover Hoodie | Blue   | S    | statybininky 43pr | Lithuania | Klaipeda       | Klaipeda | 2345    |  37063537336 |


















