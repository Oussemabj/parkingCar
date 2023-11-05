class Location {
    constructor(latitude, longitude, altitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude || 0; // Default altitude to 0 if not provided
    }

    equals(otherLocation) {
        return (
            this.latitude === otherLocation.latitude &&
            this.longitude === otherLocation.longitude &&
            this.altitude === otherLocation.altitude
        );
    }
}

module.exports = Location;
