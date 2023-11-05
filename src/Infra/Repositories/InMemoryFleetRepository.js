class InMemoryFleetRepository {
    constructor() {
        this.fleets = new Map(); // key: ownerId, value: Fleet instance
    }

    addFleet(fleet) {
        if (this.fleets.has(fleet.ownerId)) {
            throw new Error('Fleet already exists for this user.');
        }
        this.fleets.set(fleet.ownerId, fleet);
    }

    getFleetByOwnerId(ownerId) {
        return this.fleets.get(ownerId);
    }
}

module.exports = InMemoryFleetRepository;
