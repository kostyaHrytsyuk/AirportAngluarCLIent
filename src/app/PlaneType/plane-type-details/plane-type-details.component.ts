import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-plane-type-details',
  templateUrl: './plane-type-details.component.html',
  styleUrls: ['./plane-type-details.component.css']
})
export class PlaneTypeDetailsComponent implements OnInit {
  @Output() planeTypeCreated = new EventEmitter<any>();
  @Input() planeTypeInfo: any;

  public btnText = "Create";

  constructor() { 
    
  }

  ngOnInit() {
  }

  private clearForm = function() {
    this.planeTypeInfo = {
      planeModel : '',
      seatsNumber: 0,
      carrying: 0
    };
  };

  public createOrUpdatePlaneType = function(event){
    this.planeTypeCreated.emit(this.planeTypeInfo);
    this.clearForm();
  };
}
