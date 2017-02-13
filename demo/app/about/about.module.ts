import {NgModule } from "@angular/core";
import {AboutComponent } from "./about.component";
import { AboutRoutingModule} from "./AboutRouting.module"
import { UnlessDirective } from "../directives/unless.directive";

@NgModule({
  imports:[
    AboutRoutingModule
  ],
  declarations:[
    AboutComponent,
    UnlessDirective
  ]
})

export class AboutModule {}
