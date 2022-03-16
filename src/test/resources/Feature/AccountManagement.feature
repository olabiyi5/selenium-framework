@AccountManagement
Feature: Account management

  @CreateAccount
  Scenario Outline: Create an account using valid email address
    Given user is on create an account page
    When user enter "<firstname>", "<lastname>", "<email>", "<password>" and "<confirmpassword>"
    And user click create an account
    Then my account page is displayed

    Examples:
      | firstname | lastname | email                 | password   | confirmpassword |
      | daniel    | dotun    | daniendotun@gmail.com | Daniel123@ | Daniel123@      |

  @DuplicateAccount
  Scenario Outline: Create an account using valid email address
    Given user is on create an account page
    When user enter "<firstname>", "<lastname>", "<email>", "<password>" and "<confirmpassword>"
    And user click create an account
    Then error message account already exist should be displayed

    Examples:
      | firstname | lastname | email                    | password  | confirmpassword |
      | Gbenga    | olabiyi  | gbengaolabiyi6@gmail.com | Dennis123 | Dennis123       |


  @RegisteredCustomerLogin
  Scenario Outline: Registered customer to login with their username and password
    Given user is on login page
    When  user enter "<email>" , "<password>"
    And user click on login
    Then my account page is displayed

    Examples:
      | email                 | password  |
      | daniendotun@gmail.com | Danie123@ |

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
        When user create an order "<
        And user click on my order
        Then active order should be displayed

















