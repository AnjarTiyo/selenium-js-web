@Login
Feature: App Authorization
    As an user,
    I want to login into the Apps
    In order to user apps Feature

  Background: Already on Login Page
    Given I open Login Page

  Scenario: Login as user
    When I login as sociocommerce user
    Then I am logged in
    And I am on Social Commerce user dashboard page

  Scenario: Login as corporate
    When I login as corporate user
    Then I am logged in
    And I am on Corporate user dashboard page

  Scenario: Doesnt provide password when login
    When I login but doesnt provide password
    Then Login button is disabled

  Scenario: Doesnt provide username when login
    When I login but doesnt provide username
    Then Login button is disabled
    And Message email tidak boleh kosong. is appeared

  Scenario: Login with wrong credentials
    When I login with wrong credentials
    Then I am not logged in
    And Message Kombinasi email dan password salah is appeared

  Scenario: Login with invalid email format
    When I login with invalid email format
    Then Message email harus email valid. is appeared

  Scenario: Reveal password
    Given I enter "secret" to password field
    And Initial password field is masked
    When I click eye button
    Then It will reveal password
    And When I click eye icon again it will masks my password again

  Scenario: Too short password
    When I login with too short password
    Then Message The password must be at least 6 characters. is appeared