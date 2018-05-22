import { Component, OnInit } from '@angular/core';
import { TintriService } from '../tintri.service';
import { HttpClient } from '@angular/common/http';
import { Router, Route } from '@angular/router';
HttpClient
@Component({
  selector: 'app-web',
  template: `
  <html>
  <h1>{{errorMessage}}</h1>
  <a href=routeToHome()>HOMEPAGE</a>
  <table border="0" height="200" width="20%"  *ngFor="let data of tintri">
   <tr >
    <td colspan=2>
    <div class="status"><img width="15" src="{{data.src}}"> <b> {{data.status}} </b>  <img src="https://png.icons8.com/metro/1600/close-window.png" width="15px" class="img" (click)="deleteStat(data)"> </div>
      <div class="name"><b>{{data.name}}</b></div>
      <div class="description"><b>{{data.description}}</b></div>
      <div class="path"><b>{{data.path}}</b></div>
    </td>
    </tr>
    <tr >
      <td class = "vmborder">
        <div class="vm"><b>VMs</b></div> 
        <div class="vmcount"><b>{{data.number}}</b></div>
      </td>
       <td class="errorborder">
        <div class="error"><b>ERROR</b></div>
        <div class ="errorcount"><b>{{data.error}}</b></div>
        </td>
    </tr>
    </table>  
        
  <html>
  `,
  styles: []
})
export class WebComponent implements OnInit {
public tintri:any=[];
public errorMessage;
public data=[];
  constructor(private _tintri:TintriService,private route:Router) { }

  ngOnInit() {
    
    this._tintri.getConfig()
    .subscribe(data =>this.tintri = data,
                    error => this.errorMessage = error);
    //this.tintri = this._tintri.getConfig();
  }
deleteStat(data)
{
  this._tintri.deleteData(data._id).subscribe(data =>this.tintri = data);
  window.location.reload();
   
}
routeToHome()
{
  this.route.navigate(['/input']);
  
}
}
