Feature: Park a vehicle

  In order to not forget where I've parked my vehicle
  As an application user
  I should be able to indicate my vehicle location

  Background:
    Given I have my fleet
    And I have a vehicle
    And I have registered this vehicle into my fleet

  @critical
  Scenario: Successfully park a vehicle
    Given I have a location
    When I park my vehicle at this location
    Then the known location of my vehicle should verify this location

  Scenario: Can't localize my vehicle to the same location twice consecutively
    Given I have a location
    And my vehicle has been parked at this location
    When I try to park my vehicle at the same location
    Then I should be informed that my vehicle is already parked at this location
