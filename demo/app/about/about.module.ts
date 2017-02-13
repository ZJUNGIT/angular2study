import {NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {AboutComponent } from "./about.component";
import { AboutRoutingModule} from "./AboutRouting.module"
import { UnlessDirective } from "../directives/unless.directive";
import { HighlightDirective } from "../directives/highlight.directive";
import { ExponentPipe } from "../pipes/exponential.pipe";
import { FlyingHeroesPipe } from "../pipes/flyingHero.pipe";

@NgModule({
  imports:[
    AboutRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations:[
    AboutComponent,
    UnlessDirective,
    HighlightDirective,
    ExponentPipe,
    FlyingHeroesPipe
  ]
})

export class AboutModule {}
