import { Component, EventEmitter , Input, OnInit , Output } from '@angular/core';
import { Stewardess } from "../stewardess"

@Component({
  selector: 'app-stewardesses-list',
  templateUrl: './stewardesses-list.component.html',
  styleUrls: ['./stewardesses-list.component.css']
})
export class StewardessesListComponent implements OnInit {
  @Input() stewardesses: Array<any>;
  @Output() createClick = new EventEmitter<any>();
  @Output() deleteClick = new EventEmitter<any>();
  @Output() updateClick = new EventEmitter<any>();

  constructor() { }

  public createItem(){
    this.createClick.emit();
    }

  public deleteItem(item){
    this.deleteClick.emit(item);
  }

  public updateItem(item){
    const cloneItem = Object.assign({}, item);
    this.updateClick.emit(cloneItem);
  }

  ngOnInit() {
  }

}
