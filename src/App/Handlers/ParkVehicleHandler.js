// src/App/Handlers/ParkVehicleHandler.js
class ParkVehicleHandler {
    constructor(fleetRepository) {
        this.fleetRepository = fleetRepository;
    }

    handle(command) {
        const fleet = this.fleetRepository.getFleetByOwnerId(command.fleetId);
        if (!fleet) {
            throw new Error('Fleet not found.');
        }

        const vehicle = fleet.vehicles.get(command.plateNumber);
        if (!vehicle) {
            throw new Error('Vehicle not registered in the fleet.');
        }

        vehicle.park(command.location);
    }
}

module.exports = ParkVehicleHandler;
