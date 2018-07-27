export class Departure{
    constructor(
        public id?: number,
        public departureDate?: Date,
        public flightNumber?: string,
        public flightId?: number,
        public crewId?: number,
        public planeId?: number
    ) {}
}