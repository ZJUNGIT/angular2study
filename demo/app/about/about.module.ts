import {NgModule } from "@angular/core";
import {AboutComponent } from "./about.component";
import { AboutRoutingModule} from "./AboutRouting.module"
import { UnlessDirective } from "../directives/unless.directive";
import { HighlightDirective } from "../directives/highlight.directive";
import { ExponentPipe } from "../pipes/exponential.pipe";

@NgModule({
  imports:[
    AboutRoutingModule
  ],
  declarations:[
    AboutComponent,
    UnlessDirective,
    HighlightDirective,
    ExponentPipe
  ]
})

export class AboutModule {}
