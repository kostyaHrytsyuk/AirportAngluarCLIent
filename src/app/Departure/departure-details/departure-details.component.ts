import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../Service/departure.service';
import { Departure } from '../departure';

@Component({
  selector: 'app-departure-details',
  templateUrl: './departure-details.component.html',
  styleUrls: ['./departure-details.component.css']
})
export class DepartureDetailsComponent implements OnInit {
  public departureInfo: Departure;

  constructor(private departureService: DepartureService,private router: Router, private routerActivate: ActivatedRoute ) {
      this.departureInfo = new Departure();
      this.clearForm();
  }

  ngOnInit() {
    if(!isNaN(this.routerActivate.snapshot.params.id)){
      this.departureService.get(this.routerActivate.snapshot.params.id).subscribe((data: Departure) => this.departureInfo = data);
      this.clearForm();
    }
  }

  private clearForm = function(){
    this.departureInfo = {
      id: 0,
      departureDate: '',
      flightNumber: '',
      flightId: 0,
      crewId: 0,
      planeId: 0
    }
  }

  public createOrUpdateDeparture(){
    debugger;
    if (this.departureInfo.id !== 0) {
      this.departureService.update(this.departureInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/departures']);
        }        
      });      
    } else {
      this.departureService.create(this.departureInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/departures']);
        }    
      });  
    }
  };
}
