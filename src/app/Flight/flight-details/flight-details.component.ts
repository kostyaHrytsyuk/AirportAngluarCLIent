import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../Service/flight.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  public flightInfo: Flight;

  constructor(private fligthService: FlightService,private router: Router, private routerActivate: ActivatedRoute ) {
    this.flightInfo = new Flight();
    this.clearForm();
  }

  ngOnInit() {
    if(!isNaN(this.routerActivate.snapshot.params.id)){
      this.fligthService.get(this.routerActivate.snapshot.params.id).subscribe((data: Flight) => this.flightInfo = data);
      this.clearForm();
    }
  }

  private clearForm = function(){
    this.flightInfo = {
      id: 0,
      flightNumber: '',
      departureAirport: '',
      departureTime: '',
      destinationAirport: '',
      arrivalTime: ''
    }
  }

  public createOrUpdateFlight(){
    if (this.flightInfo.id !== 0) {
      this.fligthService.update(this.flightInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/flights']);
        }        
      });      
    } else {
      this.fligthService.create(this.flightInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/flights']);
        }    
      });  
    }
  };

}
