import { NgModule } from "@angular/core";
import { WikipediaRoutingModule } from "./wikipediaRouting.module";
import { WikipediaComponent } from "./wikipedia.component";
import { CommonModule } from "@angular/common";
import { HttpModule,JsonpModule } from "@angular/http";

@NgModule({
  imports:[
    WikipediaRoutingModule,
    CommonModule,
    HttpModule,
    JsonpModule
  ],
  declarations:[
    WikipediaComponent
  ]
})

export class WikipediaModule {

}
