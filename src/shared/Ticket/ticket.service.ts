import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../../app/Ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:65343/api/tickets';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getAll()
  { 
    var items = this.http.get(this.accessPointUrl, {headers: this.headers});
    return items;
  }

  public get(id):Observable<Ticket>
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(ticket):Observable<Object>
  {
    return this.http.post(this.accessPointUrl, ticket, {headers: this.headers});
  }

  public update(ticket):Observable<Object>
  {
    return this.http.put(this.accessPointUrl + '/' + ticket.id, ticket, {headers: this.headers});
  }

  public delete(id):Observable<Object>
  {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }
}
