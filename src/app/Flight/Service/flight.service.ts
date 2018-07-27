import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:65343/api/flights';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getAll()
  { 
    var items = this.http.get(this.accessPointUrl, {headers: this.headers});
    return items;
  }

  public get(id):Observable<Flight>
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(flight):Observable<Object>
  {
    return this.http.post(this.accessPointUrl, flight, {headers: this.headers});
  }

  public update(flight):Observable<Object>
  {
    return this.http.put(this.accessPointUrl + '/' + flight.id, flight, {headers: this.headers});
  }

  public delete(id):Observable<Object>
  {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }
}
