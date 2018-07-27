import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Plane } from '../plane';
import { PlaneService } from '../../../shared/Plane/plane.service';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {
  public planes: Array<Plane>;
  public currentPlane: Plane;

  constructor(private planeService: PlaneService) { }

  ngOnInit() {
    this.planeService.getAll().subscribe((data : Plane[]) => this.planes = data);
  }

  public deleteItem(item){
    const delIndex = _.findIndex(this.planes, {id: item.id});
    this.planeService.delete(item.id).subscribe(
      result => this.planes.splice(delIndex,1)
    );
  }


}
