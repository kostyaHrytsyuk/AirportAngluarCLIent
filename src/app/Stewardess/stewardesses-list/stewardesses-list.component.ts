import { Component, OnInit } from '@angular/core';
import { Stewardess } from "../stewardess"
import { StewardessService } from '../Service/stewardess.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-stewardesses-list',
  templateUrl: './stewardesses-list.component.html',
  styleUrls: ['./stewardesses-list.component.css']
})
export class StewardessesListComponent implements OnInit {
  public stewardesses: Array<Stewardess>;
  public currentStewardess: Stewardess;

  constructor(private stewardessesService: StewardessService) { }

   ngOnInit() {
    this.stewardessesService.getAll().subscribe((data : Stewardess[] ) => this.stewardesses = data);
  }

  public deleteItem(item){
    const delIndex = _.findIndex(this.stewardesses, {id: item.id});
    this.stewardessesService.delete(item.id).subscribe(
      result => this.stewardesses.splice(delIndex,1)
    );
  }

}
