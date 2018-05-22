import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TintriService } from '../tintri.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input',
  template: `
  <form method="POST">
  <div class="input1" align="center">
   Status<input type="text"  [(ngModel)]="status" #id1 required [ngModelOptions]="{standalone: true}">
   Name<input type="text"  [(ngModel)]="name" #id2 required [ngModelOptions]="{standalone: true}">
   Description<input type="text" [(ngModel)]="description" #id3 required [ngModelOptions]="{standalone: true}">
   Path<input type="text"  [(ngModel)]="path" #id4 required [ngModelOptions]="{standalone: true}">
   VMs Count<input type="text"   [(ngModel)]="vmcount" #id5 required [ngModelOptions]="{standalone: true}">
   Error<input type="text"  [(ngModel)]="error" #id6 required [ngModelOptions]="{standalone: true}">
   <input type="submit" value="Submit" (click) = routeToWeb(id1.value,id2.value,id3.value,id4.value,id5.value,id6.value)>
</div>
</form>
  `,
  styles: []
})
export class InputComponent implements OnInit {
  public flag=false;
  status: string;
  name: string;
  description: string;
  path: string;
  number: number;
  error: number;
  tintriData = [];
  public tintri:any=[];
  public errorMessage;
  public source;
  constructor(private route: Router, private _tintri: TintriService, private http:HttpClient) { }
 
  ngOnInit() {
    this.tintriData = this._tintri.getTintriData();
     this._tintri.addData(this._tintri.getTintriData())
     .subscribe(data =>this.tintri = data,
                     error => this.errorMessage = error);
  if(this.flag==true)
  {
    window.location.reload();
    this.flag=false;
  }
  }
  
  routeToWeb(status, name, description, path, vmcount, error) {

if(status=='OK' || status=='ok' || status=='okay'|| status=='OKAY')
{
  this.source='http://images.all-free-download.com/images/graphicthumb/green_globe_ok_tic_584.jpg';
}
else{
  this.source='https://cdn1.iconfinder.com/data/icons/color-bold-style/21/08-512.png';
}

    let data = {
      "src":this.source,
      "status": status,
      "name": name,
      "description": description,
      "path": path,
      "number": vmcount,
      "error": error
    }
    
    this._tintri.innerdata.push(data);
  
    this._tintri.addData(data).subscribe(data =>this.tintri = data);
    this.route.navigate(['/VMs']);
    window.location.reload();
  }         
 }
