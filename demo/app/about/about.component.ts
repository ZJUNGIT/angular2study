import { Component } from "@angular/core";

@Component({
  templateUrl:"app/about/about.component.html"
})

export class AboutComponent{
  unless:boolean = true;

  get unlessValue(){
    return this.unless;
  }
  changeUnless(){
    this.unless = !this.unless;
  }
}
