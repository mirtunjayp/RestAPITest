#Author: Mirtunjay1984@gmail.com
#Scenario: Splunk => Movie data business verification
#DateCreated: 6Oct2018
#Sorted Alogrithm for SPL003 :: Sorting requirement. Rule #1 Movies with genre_ids == null should be first in response. Rule #2, if multiple movies have genre_ids == null, then sort by id (ascending). For movies that have non-null genre_ids, results should be sorted by id (ascending)

@RegressionTest
Feature: Splunk - SDET 

  @SPL-001
  Scenario Outline: Verify no two movie should have same image/poster path
    When User submit GET request with below parameter and get movie data response
      | Param_Required_q     | <q_value>     |
      | Param_Optional_count | <count_value> |
    Then User verifies response status code is "<ResponseStatusCode>"
    And User verifies no two movie has same image

    Examples: 
      | q_value | count_value | ResponseStatusCode |
      | batman  |           0 |                200 |

  @SPL-002
  Scenario Outline: Verify all poster path should be either valid or null
    When User submit GET request with below parameter and get movie data response
      | Param_Required_q     | <q_value>     |
      | Param_Optional_count | <count_value> |
    Then User verifies response status code is "<ResponseStatusCode>"
    And User verifies all poster path is either valid or null

    Examples: 
      | q_value | count_value | ResponseStatusCode |
      | batman  |           0 |                200 |

  @SPL-003
  Scenario Outline: Prints movie title in sorted order as per the requirement
    When User submit GET request with below parameter and get movie data response
      | Param_Required_q     | <q_value>     |
      | Param_Optional_count | <count_value> |
    Then User verifies response status code is "<ResponseStatusCode>"
    And User prints movie title in sorted order as per the requirement

    Examples: 
      | q_value | count_value | ResponseStatusCode |
      | batman  |           0 |                200 |


  @SPL-004
  Scenario Outline: Prints movie title whose sum of genre ids > 400
    When User submit GET request with below parameter and get movie data response
      | Param_Required_q     | <q_value>     |
      | Param_Optional_count | <count_value> |
    Then User verifies response status code is "<ResponseStatusCode>"
		Then User prints movie title whose sum of genre ids > 400
    Examples: 
      | q_value | count_value | ResponseStatusCode |
      | batman  |           0 |                200 |


  @SPL-005
  Scenario Outline: Print movie title/s with pallindrome string in it
    When User submit GET request with below parameter and get movie data response
      | Param_Required_q     | <q_value>     |
      | Param_Optional_count | <count_value> |
    Then User verifies response status code is "<ResponseStatusCode>"
    And User print the movie title with pallindrome string in it

    Examples: 
      | q_value | count_value | ResponseStatusCode |
      | batman  |           0 |                200 |

  @SPL-006
  Scenario Outline: Print movie title/s which contains title of another movie
    When User submit GET request with below parameter and get movie data response
      | Param_Required_q     | <q_value>     |
      | Param_Optional_count | <count_value> |
    Then User verifies response status code is "<ResponseStatusCode>"
    And User print movie title/s which contains title of another movie

    Examples: 
      | q_value | count_value | ResponseStatusCode |
      | batman  |           0 |                200 |
