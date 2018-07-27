import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { Crew } from '../crew';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:65343/api/crews';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getAll()
  { 
    var items = this.http.get(this.accessPointUrl, {headers: this.headers});
    return items;
  }

  public get(id):Observable<Crew>
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(crew):Observable<Object>
  {
    return this.http.post(this.accessPointUrl, crew, {headers: this.headers});
  }

  public update(crew):Observable<Object>
  {
    return this.http.put(this.accessPointUrl + '/' + crew.id, crew, {headers: this.headers});
  }

  public delete(id):Observable<Object>
  {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }
}
