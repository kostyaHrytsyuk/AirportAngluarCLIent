import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaneType } from '../../app/PlaneType/PlaneType'

@Injectable({
  providedIn: 'root'
})

export class PlaneTypeService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:65343/api/planeTypes';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getAll()
  {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public get(id):Observable<PlaneType>
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(planeType):Observable<Object>
  {
    return this.http.post(this.accessPointUrl, planeType, {headers: this.headers});
  }

  public update(planeType):Observable<Object>
  {
    return this.http.put(this.accessPointUrl + '/' + planeType.id, planeType, {headers: this.headers});
  }

  public delete(id):Observable<Object>
  {
    var link = this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
    return link;
  }
}
