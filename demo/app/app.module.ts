import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule ,Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./appRouting.module";



@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
   ],
  declarations: [ AppComponent,NewsComponent,AboutComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
