class Fleet {
    constructor(ownerId) {
        this.ownerId = ownerId;
        this.vehicles = new Map(); // key: plateNumber, value: Vehicle instance
    }

    addVehicle(vehicle) {
        if (this.vehicles.has(vehicle.plateNumber)) {
            throw new Error('Vehicle is already registered in this fleet.');
        }
        this.vehicles.set(vehicle.plateNumber, vehicle);
    }
}

module.exports = Fleet;
