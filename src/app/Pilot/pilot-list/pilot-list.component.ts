import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Pilot } from '../pilot';
import { PilotService } from '../Service/pilot.service';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {
  public pilots: Array<Pilot>;
  public currentPilot: Pilot;

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilotService.getAll().subscribe((data : Pilot[]) => this.pilots = data);
  }

  public deleteItem(item){
    const delIndex = _.findIndex(this.pilots, {id: item.id});
    this.pilotService.delete(item.id).subscribe(
      result => this.pilots.splice(delIndex,1)
    );
  }
}
