import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from "./news.component";
import { NewsDetailComponent } from "./components/detail/news-detail.component";

const newsRoutes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'news/:id',component:NewsDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutingModule { }
