import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrewService } from '../Service/crew.service';
import { Crew } from '../crew';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})
export class CrewDetailsComponent implements OnInit {
  public crewInfo: Crew;

  constructor(private crewService: CrewService, private router: Router, private routerActivate: ActivatedRoute ) {
    this.crewInfo = new Crew();
    this.clearForm();
  }

  ngOnInit() {
    if(!isNaN(this.routerActivate.snapshot.params.id)){
    this.crewService.get(this.routerActivate.snapshot.params.id).subscribe((data : Crew) => this.crewInfo = data);
    }
  }

  private clearForm = function() {
    this.crewInfo = {
      id: 0,
      pilotId: 0
    };
  };

  public createOrUpdateCrew(){
    if (this.crewInfo.id !== 0) {
      this.crewService.update(this.crewInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/crews']);
        }        
      });      
    } else {
      this.crewService.create(this.crewInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/crews']);
        }    
      });  
    }
  };


}
