const FleetRepository = require('../../Infra/Repositories/InMemoryFleetRepository');
const Fleet = require('../../Domain/Entities/Fleet');
const Vehicle = require('../../Domain/Entities/Vehicle');

class RegisterVehicleHandler {
    constructor() {
        // This can be injected for better testing and flexibility
        this.fleetRepository = new FleetRepository();
    }

    handle(command) {
        const fleet = this.fleetRepository.getFleetByOwnerId(command.fleetId) || new Fleet(command.fleetId);
        const vehicle = new Vehicle(command.vehicle.plateNumber);
        fleet.addVehicle(vehicle);
        this.fleetRepository.addFleet(fleet);
    }
}

module.exports = RegisterVehicleHandler;
