import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PilotService } from '../Service/pilot.service';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})
export class PilotDetailsComponent implements OnInit {
  public pilotInfo: Pilot;

  constructor(private pilotService: PilotService, private router: Router, private routerActivate: ActivatedRoute ) {
    this.pilotInfo = new Pilot();
    this.clearForm();
  }

  ngOnInit() {
    if(!isNaN(this.routerActivate.snapshot.params.id)){
    this.pilotService.get(this.routerActivate.snapshot.params.id).subscribe((data : Pilot) => this.pilotInfo = data);
    }
  }

  private clearForm = function() {
    this.pilotInfo = {
      id: 0,
      firstName: '',
      lastName: '',
      birthDate: '',
      exp: 0,  
      crewId: 0
    };
  };

  public createOrUpdatePilot(){
    if (this.pilotInfo.id !== 0) {
      this.pilotService.update(this.pilotInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/pilots']);
        }        
      });      
    } else {
      this.pilotService.create(this.pilotInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/pilots']);
        }    
      });  
    }
  };

}
