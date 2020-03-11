Feature: Login page

  Background:
    Given user is on homepage

  @test
  Scenario Outline: User should not be able to login with invalid credentials

    When user enter "<username>"
    And use enter "<password>"
    And click on Login Button
    Then user should not able to login And user can see "<message>"
    Examples:
    # you can change the "message" below for Assert and test case will be failed and picture will be saved

      | username | password | message                  |
      # Invalid username and Invalid Password
      | Abcd1    | xyz11    | Invalid credentials      |
      # Invalid username and valid password
      | Abcd1    | Admin123 | Invalid credentials      |
      # Invalid username and blank password
      | Abcd1    |          | Password cannot be empty |
      # Valid username and Invalid Password
      | Admin    | xyz11    | Invalid credentials      |
      # valid username and blank password
      | Admin    |          | Password cannot be empty |
      # Blank username and valid password
      |          | Admin123 | Username cannot be empty |
      # Blank username and Invalid password
      |          | xyz11    | Username cannot be empty |
      # Blank username and Blank password
      |          |          | Username cannot be empty |

