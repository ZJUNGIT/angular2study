import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";

import { WikipediaComponent } from "./wikipedia.component";

const wikipediaRoutes:Routes = [
  {path:'wikipedia',component:WikipediaComponent}
]
@NgModule({
  imports:[
    RouterModule.forChild(wikipediaRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class WikipediaRoutingModule { }
