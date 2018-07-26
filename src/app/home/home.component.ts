import { Component, OnInit } from '@angular/core';
import { PlaneTypeService } from '../PlaneType/Service/plane-type.service';
import { StewardessService } from '../Stewardess/StewardessService/stewardess.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public planeTypes: Array<any>;
  public stewardesses: Array<any>;
  public currentPlaneType: any;


  constructor(
    private planeTypeService: PlaneTypeService
  , private stewardessesService: StewardessService ) {
    
    planeTypeService.getAll().subscribe((data: any) => this.planeTypes = data);
    stewardessesService.getAll().subscribe((data : any ) => this.stewardesses = data);
    this.currentPlaneType = this.setDefaultValuesForPlaneType();
  }

  ngOnInit() {
  }
  
  public createClicked = function(item){
    this.currentPlaneType = this.setDefaultValuesForPlaneType();
  }

  public deleteClick(item){
    const delIndex = _.findIndex(this.planeTypes, {id: item.id});
    this.planeTypeService.delete(item.id).subscribe(
      result => this.planeTypes.splice(delIndex,1)
    );
  }

  public updateClicked = function(item){
    this.currentPlaneType = item;
  };



  public createOrUpdatePlaneType = function(planeType: any){
    let planeTypeWithId;
    planeTypeWithId = _.find(this.planeTypes, (pt => pt.id === planeType.id));
  
    if (planeTypeWithId) {
      const updIndex = _.findIndex(this.planeTypes, {id: planeTypeWithId.id});
      this.planeTypeService.update(planeType).subscribe(
        planeTypeRecord => this.planeTypes.splice(updIndex, 1 , planeType)
      );      
    } else {
      this.planeTypeService.create(planeType).subscribe(
        planeTypeRecord => this.planeTypes.push(planeType)
      );  
    }

    this.currentPlaneType = this.setDefaultValuesForPlaneType();
  };

  private setDefaultValuesForPlaneType(){
    return{
      planeModel : '',
      seatsNumber: 0,
      carrying: 0
    }
  }
}
