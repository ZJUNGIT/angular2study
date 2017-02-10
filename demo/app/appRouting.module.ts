import { NgModule } from "@angular/core";
import { RouterModule ,Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { AboutComponent } from "./about/about.component";


const appRoutes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  // { path: '', component: NewsComponent }
  { path: '', redirectTo: '/news', pathMatch: 'full'}  //重定向   pathMatch:full prefix
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
