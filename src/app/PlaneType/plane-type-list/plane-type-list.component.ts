import { Component, EventEmitter , Input, OnInit , Output } from '@angular/core';
import { PlaneType } from '../planeType';
import { PlaneTypeService } from '../../../shared/PlaneType/plane-type.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-plane-type-list',
  templateUrl: './plane-type-list.component.html',
  styleUrls: ['./plane-type-list.component.css']
})
export class PlaneTypeListComponent implements OnInit {
  public planeTypes: Array<PlaneType>;
  public currentPlaneType: PlaneType;

  constructor(private planeTypeService: PlaneTypeService) { }

  ngOnInit() {
    this.planeTypeService.getAll().subscribe(( data : PlaneType[]) => this.planeTypes = data)
  }
  
  public deleteItem(item){
    const delIndex = _.findIndex(this.planeTypes, {id: item.id});
    this.planeTypeService.delete(item.id).subscribe(
      result => this.planeTypes.splice(delIndex,1)
    );
  }
}
