import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

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

  public get(id)
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(planeType)
  {
    return this.http.post(this.accessPointUrl, planeType, {headers: this.headers});
  }

  public update(planeType)
  {
    return this.http.put(this.accessPointUrl + '/' + planeType, {headers: this.headers});
  }

  public delete(id)
  {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }
}
