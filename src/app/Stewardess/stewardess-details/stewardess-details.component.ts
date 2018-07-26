import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-stewardess-details',
  templateUrl: './stewardess-details.component.html',
  styleUrls: ['./stewardess-details.component.css']
})
export class StewardessDetailsComponent implements OnInit {
  @Output() stewardessCreated = new EventEmitter<any>();
  @Input() stewardessInfo: any;

  constructor() { }

  ngOnInit() { }


  private clearForm = function() {
    this.stewardessInfo = {
      firstName : '',
      lastName: '',
      birthDate: '',
      crewId: 0
    };
  };

  public createOrUpdateStewardess = function(event){
    debugger;
    this.stewardessCreated.emit(this.stewardessInfo);
    this.clearForm();
  };
  
}
