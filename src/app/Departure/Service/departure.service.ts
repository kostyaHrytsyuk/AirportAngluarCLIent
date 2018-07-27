import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departure } from '../departure';

@Injectable({
  providedIn: 'root'
})
export class DepartureService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:65343/api/departures';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getAll()
  { 
    var items = this.http.get(this.accessPointUrl, {headers: this.headers});
    return items;
  }

  public get(id):Observable<Departure>
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(departure):Observable<Object>
  {
    return this.http.post(this.accessPointUrl, departure, {headers: this.headers});
  }

  public update(departure):Observable<Object>
  {
    return this.http.put(this.accessPointUrl + '/' + departure.id, departure, {headers: this.headers});
  }

  public delete(id):Observable<Object>
  {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }
}
