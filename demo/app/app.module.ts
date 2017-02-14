import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';


import { AppRoutingModule } from "./appRouting.module";


import { NewsModule } from "./news/news.module";
import { AboutModule } from "./about/about.module";
import { AdminModule } from "./admin/admin.module";
import { LoginRoutingModule } from "./login-routing.module";
import { WikipediaModule } from "./wikipedia/wikipedia.module";

import { LoginComponent } from "./login.component";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';






@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    AboutModule,
    WikipediaModule,
    // AdminModule,
    LoginRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)//forRoot配置方法需要InMemoryDataService类实例，用来向内存数据库填充数据：
   ],
  declarations: [ AppComponent,LoginComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})

export class AppModule { }
