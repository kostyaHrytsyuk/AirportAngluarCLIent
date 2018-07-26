import { Component, EventEmitter , Input, OnInit , Output } from '@angular/core';
import { Stewardess } from "../stewardess"
import { StewardessService } from '../Service/stewardess.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-stewardesses-list',
  templateUrl: './stewardesses-list.component.html',
  styleUrls: ['./stewardesses-list.component.css']
})
export class StewardessesListComponent implements OnInit {
  @Output() createClick = new EventEmitter<any>();
  @Output() deleteClick = new EventEmitter<any>();
  @Output() updateClick = new EventEmitter<any>();

  public stewardesses: Array<any>;
  public currentStewardess: any;

  constructor(private stewardessesService: StewardessService) {
    
   }

   ngOnInit() {
    this.stewardessesService.getAll().subscribe((data : any ) => this.stewardesses = data);
  }

  // public createItem(){
  //   this.createClick.emit();
  //   }

  //   public createClicked = function(item){
  //     this.currentStewardess = this.setDefaultValuesForStewardess();
  //   }

  public deleteItem(item){
    const delIndex = _.findIndex(this.stewardesses, {id: item.id});
    this.stewardessesService.delete(item.id).subscribe(
      result => this.stewardesses.splice(delIndex,1)
    );
  }

  // public updateItem = function(item){
  //   this.currentStewardess = item;
  // };
  


  

}
