import {NgModule } from "@angular/core";
import {AboutComponent } from "./about.component";
import { AboutRoutingModule} from "./AboutRouting.module"

@NgModule({
  imports:[
    AboutRoutingModule
  ],
  declarations:[
    AboutComponent
  ]
})

export class AboutModule {}
