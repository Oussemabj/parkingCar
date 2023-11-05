// steps/register_vehicle_steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;
const Fleet = require('../../Domain/Entities/Fleet');
const Vehicle = require('../../Domain/Entities/Vehicle');
const Location = require('../../Domain/ValueObjects/Location');
const FleetRepository = require('../../Infra/Repositories/InMemoryFleetRepository');
const RegisterVehicleHandler = require('../../App/Handlers/RegisterVehicleHandler');

let fleetRepository, registerVehicleHandler, fleet, vehicle;

Given('my fleet', function () {
    fleetRepository = new FleetRepository();
    fleet = new Fleet('user1');
    fleetRepository.addFleet(fleet);
});

Given('a vehicle', function () {
    vehicle = new Vehicle('ABC123');
});

When('I register this vehicle into my fleet', function () {
    registerVehicleHandler = new RegisterVehicleHandler(fleetRepository);
    registerVehicleHandler.handle({ fleetId: 'user1', vehicle });
});

Then('this vehicle should be part of my vehicle fleet', function () {
    assert(fleet.vehicles.has(vehicle.plateNumber));
});

