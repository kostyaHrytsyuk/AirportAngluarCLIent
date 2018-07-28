import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../shared/Ticket/ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  public ticketInfo: Ticket;

  constructor(private ticketService: TicketService,private router: Router, private routerActivate: ActivatedRoute ) {
    this.ticketInfo = new Ticket();
    this.clearForm();
  }

  ngOnInit() {
    if(!isNaN(this.routerActivate.snapshot.params.id)){
      this.ticketService.get(this.routerActivate.snapshot.params.id).subscribe((data: Ticket) => this.ticketInfo = data);
    }
  }

  private clearForm = function(){
    this.ticketInfo = {
      id: 0,
      price: 0,
      flightNumber: '',
      flightId: 0
    }
  }
  
  public createOrUpdateTicket(){
    if (this.ticketInfo.id !== 0) {
      this.ticketService.update(this.ticketInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/tickets']);
        }        
      });      
    } else {
      this.ticketService.create(this.ticketInfo).subscribe((resp) => {        
        if(resp){
          this.router.navigate(['/tickets']);
        }    
      });  
    }
  };

}
