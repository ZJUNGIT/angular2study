import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from "@angular/forms";

import { NewsRoutingModule } from "./newsRouting.module";

import { NewsComponent } from "./news.component";
import { NewsDetailComponent } from "./components/detail/news-detail.component";

import { NewsService } from "./services/news.service";
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    NewsComponent,
    NewsDetailComponent
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule {}
