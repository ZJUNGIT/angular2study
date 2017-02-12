import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminComponent } from "./admin.component";
import { ManageNewsComponent } from "./manage-new.component";
import { ManageAboutComponent } from "./manage-about.component";
import { AdminDashboardComponent } from "./adminDashboard.component";

import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
  imports:[
    CommonModule,
    AdminRoutingModule
  ],
  declarations:[
    AdminComponent,
    ManageNewsComponent,
    ManageAboutComponent,
    AdminDashboardComponent
  ]
})

export class AdminModule{

}
