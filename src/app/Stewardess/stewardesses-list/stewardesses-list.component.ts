import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stewardesses-list',
  templateUrl: './stewardesses-list.component.html',
  styleUrls: ['./stewardesses-list.component.css']
})
export class StewardessesListComponent implements OnInit {

  constructor() { }

  @Input() stewardesses: Array<any>;

  ngOnInit() {
  }

}
