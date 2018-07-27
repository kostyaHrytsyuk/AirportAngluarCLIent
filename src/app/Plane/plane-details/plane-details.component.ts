import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlaneService } from '../../../shared/Plane/plane.service';
import { Plane } from '../plane';

@Component({
  selector: 'app-plane-details',
  templateUrl: './plane-details.component.html',
  styleUrls: ['./plane-details.component.css']
})
export class PlaneDetailsComponent implements OnInit {
  public planeInfo : Plane;


  constructor(private planeService: PlaneService, private router: Router, private routerActivate: ActivatedRoute ) {
    this.planeInfo = new Plane();
    this.clearForm();
  }

  ngOnInit() {
    if(!isNaN(this.routerActivate.snapshot.params.id)){
      this.planeService.get(this.routerActivate.snapshot.params.id).subscribe((data : Plane) => this.planeInfo = data);
    }
  }

  private clearForm = function() {
    this.planeInfo = {
      id: 0,
      name: '',
      planeTypeId: 0,
      releaseDate: ''  
    };
  };

  public createOrUpdatePlane(){
    if (this.planeInfo.id !== 0) {
      this.planeService.update(this.planeInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/planes']);
        }        
      });      
    } else {
      this.planeService.create(this.planeInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/planes']);
        }    
      });  
    }
  };

}
