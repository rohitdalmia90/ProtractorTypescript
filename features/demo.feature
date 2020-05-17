Feature: I am going to valiate website functionalities

    Scenario Outline: Scenario Outline name: Calculator Add functionality Testing
        Given I will navigate to "calculator" site
        When I add two numbers "<num1>" and "<num2>"
        Then the output displayed should be "<result>"

        Examples:
            | num1 | num2 | result |
            | 3    | 5    | 8      |
            

        @angular
    Scenario: Calculator Add functionality testing
        Given I will navigate to "angularJS" site
        When I click on header link
        And I will navigate to angular page
        Then I will enter "hello" in searchBox

