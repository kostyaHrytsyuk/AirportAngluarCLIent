import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Flight } from '../flight';
import { FlightService } from '../Service/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  public flights: Array<Flight>;
  public currentFlight: Flight;

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.getAll().subscribe((data : Flight[]) => this.flights = data);
  }

  public deleteItem(item){
    const delIndex = _.findIndex(this.flights, {id: item.id});
    this.flightService.delete(item.id).subscribe(
      result => this.flights.splice(delIndex,1)
    );
  }
}
