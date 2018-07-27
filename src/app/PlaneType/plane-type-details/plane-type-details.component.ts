import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaneType } from '../planeType';
import { PlaneTypeService } from 'src/shared/PlaneType/plane-type.service';

@Component({
  selector: 'app-plane-type-details',
  templateUrl: './plane-type-details.component.html',
  styleUrls: ['./plane-type-details.component.css']
})
export class PlaneTypeDetailsComponent implements OnInit {
  public planeTypeInfo: PlaneType;

  constructor(private planeTypeService: PlaneTypeService, private router: Router, private routerActivate: ActivatedRoute) { 
    this.planeTypeInfo = new PlaneType();
    this.clearForm();
  }

  ngOnInit() {
    if(!isNaN(this.routerActivate.snapshot.params.id)){
      this.planeTypeService.get(this.routerActivate.snapshot.params.id).subscribe((data : PlaneType) => this.planeTypeInfo = data);
    }
  }

  private clearForm = function() {
    this.planeTypeInfo = {
      planeModel : '',
      seatsNumber: 0,
      carrying: 0
    };
  };

  public createOrUpdatePlaneType(){
    if (this.planeTypeInfo.id !== 0) {
      this.planeTypeService.update(this.planeTypeInfo).subscribe((resp) => {
        if(resp){
          this.router.navigate(['/planeTypes']);
        }
      });      
    } else {
      this.planeTypeService.create(this.planeTypeInfo).subscribe((resp) => {
        if(resp){
          this.router.navigate(['/planeTypes']);
        }
      });    
    }
  };
}
