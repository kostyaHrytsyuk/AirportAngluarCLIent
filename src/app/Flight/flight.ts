export class Flight{
    constructor(
        public id?: number,
        public flightNumber?: string,
        public departureAirport? : string,
        public departureTime? : Date,
        public destinationAirport? : string,
        public arrivalTime? : Date
    ) {}
}