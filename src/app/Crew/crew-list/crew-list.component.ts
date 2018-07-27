import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Crew } from '../crew';
import { CrewService } from '../Service/crew.service';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {
  public crews: Array<Crew>;
  public currentCrew: Crew;

  constructor(private crewService: CrewService) { }

  ngOnInit() {
    this.crewService.getAll().subscribe((data : Crew[]) => this.crews = data);
  }

  public deleteItem(item){
    const delIndex = _.findIndex(this.crews, {id: item.id});
    this.crewService.delete(item.id).subscribe(
      result => this.crews.splice(delIndex,1)
    );
  }

}
