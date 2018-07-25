import { Component, OnInit } from '@angular/core';
import { PlaneTypeService } from '../PlaneType/Service/plane-type.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public planeTypes: Array<any>;
  public currentPlaneType: any;


  constructor(private planeTypeService: PlaneTypeService) {
    planeTypeService.getAll().subscribe((data: any) => this.planeTypes = data);
   }

  ngOnInit() {
  }

}
