import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StewardessService } from '../Service/stewardess.service';
import { Stewardess } from '../stewardess';

@Component({
  selector: 'app-stewardess-details',
  templateUrl: './stewardess-details.component.html',
  styleUrls: ['./stewardess-details.component.css']
})
export class StewardessDetailsComponent implements OnInit {
  public stewardessInfo : Stewardess;

  constructor(private stewardessesService: StewardessService, private router: Router, private routerActivate: ActivatedRoute) {
    this.stewardessInfo = new Stewardess();
    this.clearForm();
  }

  ngOnInit() { 
    if(!isNaN(this.routerActivate.snapshot.params.id)){
      this.stewardessesService.get(this.routerActivate.snapshot.params.id).subscribe((data : Stewardess ) => this.stewardessInfo = data);
    }
  }

  private clearForm = function() {
    this.stewardessInfo = {
      id : 0  ,
      firstName : '',
      lastName: '',
      birthDate: '',
      crewId: 0
    };
  };

  public createOrUpdateStewardess(){
    if (this.stewardessInfo.id !== 0) {
      this.stewardessesService.update(this.stewardessInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/stewardesses']);
        }        
      });      
    } else {
      this.stewardessesService.create(this.stewardessInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/stewardesses']);
        }    
      });  
    }
  };
}
