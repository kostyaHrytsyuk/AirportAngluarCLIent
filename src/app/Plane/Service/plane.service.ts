import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { Plane } from '../plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:65343/api/planes';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getAll()
  { 
    var items = this.http.get(this.accessPointUrl, {headers: this.headers});
    return items;
  }

  public get(id):Observable<Plane>
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(plane):Observable<Object>
  {
    return this.http.post(this.accessPointUrl, plane, {headers: this.headers});
  }

  public update(plane):Observable<Object>
  {
    return this.http.put(this.accessPointUrl + '/' + plane.id, plane, {headers: this.headers});
  }

  public delete(id):Observable<Object>
  {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

}
