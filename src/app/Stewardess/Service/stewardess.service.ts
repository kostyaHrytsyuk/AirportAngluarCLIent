import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

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
    debugger;
    return items;
  }

  public get(id)
  {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public create(stewardess)
  {
    debugger;
    return this.http.post(this.accessPointUrl, stewardess, {headers: this.headers});
  }

  public update(stewardess)
  {
    return this.http.put(this.accessPointUrl + '/' + stewardess.id, stewardess, {headers: this.headers});
  }

  public delete(id)
  {
    return this.http.delete(this.accessPointUrl + '/' + id, {headers: this.headers});
  }
}
