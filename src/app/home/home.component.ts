import { Component, OnInit } from '@angular/core';
import { PlaneTypeService } from '../PlaneType/Service/plane-type.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
    
  //#region Plane Type
  // public createClicked = function(item){
  //   this.currentPlaneType = this.setDefaultValuesForPlaneType();
  // }



  // public updateClicked = function(item){
  //   this.currentPlaneType = item;
  // };

  

  // private setDefaultValuesForPlaneType(){
  //   return{
  //     planeModel : '',
  //     seatsNumber: 0,
  //     carrying: 0
  //   }
  // }
  //#endregion
}
