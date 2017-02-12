import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { NewsRoutingModule } from "./newsRouting.module";

import { NewsComponent } from "./news.component";
import { NewsDetailComponent } from "./components/detail/news-detail.component";

import { NewsService } from "./services/news.service";

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
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
