import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@angular/material';

import 'hammerjs';
  


@Component({
  selector: 'App',
  templateUrl:'./input-form-example.html',
  styleUrls: ['./input-form-example.css'],
  /*template:
  `<div>
    <h2>Welcome to {{name}} Angular2!</h2>
    </div>`*/
})
export class AppComponent implements OnInit {
  public readonly name = 'electron-forge KT app';

  ngOnInit(): void {
    console.log('component initialized');
  }
}

@NgModule({
imports: [BrowserModule, MaterialModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
   
}