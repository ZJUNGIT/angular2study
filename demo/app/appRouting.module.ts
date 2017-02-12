import { NgModule } from "@angular/core";
import { RouterModule ,Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";



const appRoutes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full'},  //重定向   pathMatch:full prefix
  {
    path:'admin',
    loadChildren:'app/admin/admin.module#AdminModule',
    // canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
