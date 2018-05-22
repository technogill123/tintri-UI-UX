import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import {TintriService } from './tintri.service'
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './input/input.component';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [TintriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
