import { Component, OnInit } from '@angular/core';
import { PlaneTypeService } from '../PlaneType/Service/plane-type.service';
import { StewardessService } from '../Stewardess/StewardessService/stewardess.service';

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
  
  }

  ngOnInit() {
  }

}
