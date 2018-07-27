import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stewardess } from '../stewardess';

@Injectable({
  providedIn: 'root'
})
export class StewardessService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:65343/api/stewardesses';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getAll()
  { 
    var items = this.http.get(this.accessPointUrl, {headers: this.headers});
    return items;
  }

  public get(id):Observable<Stewardess>
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(stewardess):Observable<Object>
  {
    return this.http.post(this.accessPointUrl, stewardess, {headers: this.headers});
  }

  public update(stewardess):Observable<Object>
  {
    return this.http.put(this.accessPointUrl + '/' + stewardess.id, stewardess, {headers: this.headers});
  }

  public delete(id):Observable<Object>
  {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }
}
