import { NgModule } from "@angular/core";
import { RouterModule ,Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { AboutComponent } from "./about/about.component";
import { NewsDetailComponent } from "./news/detail/news-detail.component";


const appRoutes: Routes = [
  { path: 'news', component: NewsComponent },
  //路径中的冒号 (:) 表示:id是一个占位符，当导航到这个NewsDetailComponent组件时，它将被填入一个特定News的id。
  { path: 'news/:id',component:NewsDetailComponent },
  { path: 'about', component: AboutComponent },
  // { path: '', component: NewsComponent }
  { path: '', redirectTo: '/news', pathMatch: 'full'}  //重定向   pathMatch:full prefix
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
