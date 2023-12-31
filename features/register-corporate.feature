@Register @Corp
Feature: Register as a corporate user
    As an unregistered user,
    I want to register into app as corporate user,
    So I can use corporate features

  Background: Already on Corporate Register Page
    Given I open Corporate Register Page

  Scenario: Register new corporate with valid data
    When I register new Corporate using valid data
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
