import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';


import { AppRoutingModule } from "./appRouting.module";


import { NewsModule } from "./news/news.module";
import { AboutModule } from "./about/about.module";
import { AdminModule } from "./admin/admin.module";
import { LoginRoutingModule } from "./login-routing.module";

import { LoginComponent } from "./login.component";



@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    AboutModule,
    AdminModule,
    LoginRoutingModule
   ],
  declarations: [ AppComponent,LoginComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})

export class AppModule { }
