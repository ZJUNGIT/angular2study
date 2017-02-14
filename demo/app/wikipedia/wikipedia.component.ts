import { Component } from "@angular/core";
import { WikipediaService } from "./services/wikipedia.service";

@Component({
  templateUrl:'app/wikipedia/wikipedia.component.html',
  providers:[WikipediaService]
})

export class WikipediaComponent{
  title = "Wikipedia Demo ";
  fetches = "Fetches after each keystroke";
  items:Obeservale<string[]>;

  constructor(private wikipediaService:WikipediaService){}

  search(term:string){
    console.log(term)
    this.items = this.wikipediaService.search(term);
  }

}
