import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule ,Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./appRouting.module";
import { NewsDetailComponent } from "./news/detail/news-detail.component";
import { NewsService } from "./services/news.service";


@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
   ],
  declarations: [ AppComponent,NewsComponent,AboutComponent,NewsDetailComponent],
  bootstrap:    [ AppComponent ],
  providers: [ NewsService ]
})

export class AppModule { }
