@Register
Feature: Register as a sociocommerce user
    As an unregistered user,
    I want to register into app as sociocommerce,
    So I can use sociocommerce features

  Background: Already on Sociocommerce Register Page
    Given I open Sociocommerce Register Page

  Scenario: Register with valid data
    When I register new Sociocommerce using valid data
    Then I am redirected to email verification page
    # And I am registered as sociocommerce user
    # And I can Login using this credentials
