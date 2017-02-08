import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

@Component({
  selector: 'App',
  // templateUrl: './input-form-example.html',
  styleUrls: ['./input-form-example.css'],
  template:
  `
  <div>
  <md-toolbar color="primary">
    <span><md-icon>mood</md-icon></span>
    <span>Yay, Material in Angular 2!</span>
    <button md-icon-button [md-menu-trigger-for]="menu">
      <md-icon>more_vert</md-icon>
    </button>
  </md-toolbar>
  <md-menu x-position="before" #menu="mdMenu">
    <button md-menu-item>Option 1</button>
    <button md-menu-item>Option 2</button>
  </md-menu>

  <md-card>
    <button md-button>All</button>
    <button md-raised-button>Of</button>
    <button md-raised-button color="primary">The</button>
    <button md-raised-button color="accent">Buttons</button>
  
  <h2>Welcome to {{name}} Angular2!</h2>
  </md-card>


  <span class="done">
    <button md-fab>
      <md-icon>check circle</md-icon>
    </button>
  </span>
</div>
  
  <div>
    <h2>Welcome to {{name}} Angular2!</h2>
  <button md-icon-button [mdMenuTriggerFor]="menu">
  <md-icon>more_vert</md-icon>
</button>
<md-menu #menu="mdMenu">
  <button md-menu-item>
    <md-icon>dialpad</md-icon>
    <span>Redial</span>
  </button>
  <button md-menu-item disabled>
    <md-icon>voicemail</md-icon>
    <span>Check voicemail</span>
  </button>
  <button md-menu-item>
    <md-icon>notifications_off</md-icon>
    <span>Disable alerts</span>
  </button>
</md-menu> 
    </div>`
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

export class AppModule { }