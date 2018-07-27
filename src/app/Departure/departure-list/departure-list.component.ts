import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Departure } from '../departure';
import { DepartureService } from '../Service/departure.service';


@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {
  public departures: Array<Departure>;
  public currentDeparture: Departure;

  constructor(private departureService: DepartureService) { }

  ngOnInit() {
    this.departureService.getAll().subscribe((data : Departure[]) => this.departures = data);
  }

  public deleteItem(item){
    const delIndex = _.findIndex(this.departures, {id: item.id});
    this.departureService.delete(item.id).subscribe(
      result => this.departures.splice(delIndex,1)
    );
  }
}
