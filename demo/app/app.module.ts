import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';


import { AppRoutingModule } from "./appRouting.module";


import { NewsModule } from "./news/news.module";
import { AboutModule } from "./about/about.module";



@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    AboutModule
   ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})

export class AppModule { }
