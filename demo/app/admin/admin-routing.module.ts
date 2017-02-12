import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { ManageNewsComponent } from "./manage-new.component";
import { ManageAboutComponent } from "./manage-about.component";
import { AdminDashboardComponent } from "./adminDashboard.component";

import { AuthGuard } from "../auth-guard.service";


const adminRoutes:Routes = [
  {
    path:"admin",
    component:AdminComponent,
    canActivate:[AuthGuard ],
    children:[
      {
        path:'', //来看AdminComponent下的子路由，我们有一个带path和children的子路由，但它没有使用component。这并不是配置中的失误，而是在使用无组件路由。
                //虽然我们希望对admin路径下的危机中心管理类路由进行分组，但并不需要另一个仅用来分组路由的组件。 这同时也允许我们守卫子路由。
        canActivateChild:[AuthGuard],
        children:[
          {path:'news',component:ManageNewsComponent},
          {path:'heroes',component:ManageAboutComponent},
          {path:'',component:AdminDashboardComponent}
        ]
      }
    ]
  }
]
@NgModule({
  imports:[
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AdminRoutingModule{

}
