import { Component, EventEmitter , Input, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-plane-type-list',
  templateUrl: './plane-type-list.component.html',
  styleUrls: ['./plane-type-list.component.css']
})
export class PlaneTypeListComponent implements OnInit {
  @Input() planeTypes: Array<any>;
  @Output() createClick = new EventEmitter<any>();
  @Output() deleteClick = new EventEmitter<any>();
  @Output() updateClick = new EventEmitter<any>();
  

  constructor() { }

  public createItem(){
    debugger;
    this.createClick.emit();
    }

  public deleteItem(item){
    debugger;
    this.deleteClick.emit(item);
  }

  public updateItem(item){
    const cloneItem = Object.assign({}, item);
    this.updateClick.emit(cloneItem);
  }

  ngOnInit() {
  }

}
