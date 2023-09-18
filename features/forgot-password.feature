@ForgotPassword
Feature: Forgot password

    As an registered user,
    I want reset my password because I forgot it,
    So I can use my account again

    Background: Already on forgot password page
        Given I open Login Page
        And I click Forgot Password link

    Scenario: Use forgot password with registered email
        Given I enter registered email to email field
        When I click Reset Password button
        Then Message Kami sudah mengirimkan link untuk reset password Anda. Tolong cek email Anda! is appeared
