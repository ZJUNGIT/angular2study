import {NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {AboutComponent } from "./about.component";
import { AboutRoutingModule} from "./AboutRouting.module"
import { UnlessDirective } from "../directives/unless.directive";
import { HighlightDirective } from "../directives/highlight.directive";
import { ExponentPipe } from "../pipes/exponential.pipe";

@NgModule({
  imports:[
    AboutRoutingModule,
    FormsModule
  ],
  declarations:[
    AboutComponent,
    UnlessDirective,
    HighlightDirective,
    ExponentPipe
  ]
})

export class AboutModule {}
