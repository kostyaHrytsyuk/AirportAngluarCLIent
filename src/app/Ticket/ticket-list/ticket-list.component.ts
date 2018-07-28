import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Ticket } from '../ticket';
import { TicketService } from '../../../shared/Ticket/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  public tickets: Array<Ticket>;
  public currentTicket: Ticket;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getAll().subscribe((data : Ticket[]) => this.tickets = data);
  }

  public deleteItem(item){
    const delIndex = _.findIndex(this.tickets, {id: item.id});
    this.ticketService.delete(item.id).subscribe(
      result => this.tickets.splice(delIndex,1)
    );
  }

}
