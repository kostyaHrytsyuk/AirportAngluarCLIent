import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { Pilot } from '../pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:65343/api/pilots';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getAll()
  { 
    var items = this.http.get(this.accessPointUrl, {headers: this.headers});
    return items;
  }

  public get(id):Observable<Pilot>
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(pilot):Observable<Object>
  {
    return this.http.post(this.accessPointUrl, pilot, {headers: this.headers});
  }

  public update(pilot):Observable<Object>
  {
    return this.http.put(this.accessPointUrl + '/' + pilot.id, pilot, {headers: this.headers});
  }

  public delete(id):Observable<Object>
  {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }
}
