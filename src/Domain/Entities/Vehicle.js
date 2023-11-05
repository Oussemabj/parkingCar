class Vehicle {
    constructor(plateNumber) {
        this.plateNumber = plateNumber;
        this.parkedLocation = null;
    }

    park(location) {
        if (this.parkedLocation && this.parkedLocation.equals(location)) {
            throw new Error('Vehicle is already parked at this location.');
        }
        this.parkedLocation = location;
    }
}

module.exports = Vehicle;
