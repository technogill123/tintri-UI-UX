import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';
import { InputComponent } from './input/input.component';


const routes: Routes = [
  {path:'',component:InputComponent,},
  {path:'VMs',component:WebComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
