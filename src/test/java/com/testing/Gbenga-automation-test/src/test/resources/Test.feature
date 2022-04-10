@VintedTest
Feature: Vinted test

  @AppearedNikeFilterBelowTheMenu
  Scenario Outline: Nike appeared below the filter menu
    Given user open the catalogue
    When user click on the brand filter dropdown
    And user type "<Ni>"
    Then Nike filter should appear below the filter menu


    @AllItemWithinTheResultPageAreWithNikeBrand
    Scenario Outline: All items within the page are with Nike Brand
      Given user open the catalogue
      When user click on the brand filter dropdown
      And user typ"<Ni>"
      Then The all the items within the result page should be with Nike brand


      @PageAreSortedByHighestPriceToTheLowest




