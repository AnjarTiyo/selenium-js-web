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

  Scenario: Register but doesnt provide name
    When I register but dont provide name
    Then Message name tidak boleh kosong. is appeared

  Scenario: Register but doesnt provide email
    When I register but dont provide email
    Then Message email tidak boleh kosong. is appeared

  Scenario: Register but doesnt provide phone
    When I register but dont provide phone
    Then Message phone tidak boleh kosong. is appeared

    Scenario: Provide common password
    When I register with common password
    Then Message password masuk ke dalam daftar rentan is appeared

    # Scenario: Too few username
    # Scenario: Invalid email format
    # Scenario: Too few password
    # Scenario: Invalid phone format
    # Scenario: Too few phone number
