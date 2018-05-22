import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Tintri } from './tintri'
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class TintriService {

  public data:any;
  public myObj: Tintri;
  public innerdata:any=[];
  public urlStr: any;
  private _url: string = 'http://192.168.106.141:8083/pd';
  private parseData(res: Response) {
    return res.json() || [];
  }
  constructor(private http: HttpClient) { }
  getConfig(): Observable<Tintri[]> { 
    this.data=this.http.get('http://192.168.106.141:8083/vd');
    return this.data.catch(this.errorHandler);
  }
  private extractData(res: Response) {
    return res.json() || [];
  }
  addData(data){
    return this.http.post(this._url,data).map(this.extractData)
               .catch(this.errorHandler);
}


deleteData(data):Observable<{}>{
  this.urlStr = 'http://192.168.106.141:8083/dd/'+ data;
  return this.http.delete( this.urlStr,
    { headers: new HttpHeaders().set('Content-Type', 'application/json'),responseType: 'text'})
      .catch(this.errorHandler);
}
  getTintriData()
  {
    return this.innerdata;
  }
 
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }

}