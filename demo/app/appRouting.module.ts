import { NgModule } from "@angular/core";
import { RouterModule ,Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";



const appRoutes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full'}  //重定向   pathMatch:full prefix
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
