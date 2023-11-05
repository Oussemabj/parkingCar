// src/App/Commands/RegisterVehicleCommand.js
class RegisterVehicleCommand {
    constructor(fleetId, vehicle) {
        this.fleetId = fleetId;
        this.vehicle = vehicle;
    }
}

module.exports = RegisterVehicleCommand;

