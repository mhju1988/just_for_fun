import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ModalComponent
  ],
    imports: [
      NgbModule,
      BrowserModule,
      FormsModule,
      HttpClientModule
    ],
  providers: [ServersComponent , ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
