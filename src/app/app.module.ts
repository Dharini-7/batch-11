import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { QTwoComponent } from './q-two/q-two.component';
import { QFourComponent } from './q-four/q-four.component';
import { YearlyyComponent } from './yearlyy/yearlyy.component';

@NgModule({
  declarations: [
    AppComponent,
    QTwoComponent,
    QFourComponent,
    YearlyyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
