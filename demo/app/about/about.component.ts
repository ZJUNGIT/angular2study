import { Component,OnInit } from "@angular/core";

@Component({
  templateUrl:"app/about/about.component.html"
})

export class AboutComponent implements OnInit{
  heroes = [];
  canFly = true;
  constructor(){
    this.reset();
  }
  addHero(name:string){
    name = name.trim();
    if(!name){return;}
    let hero = {name,canFly:this.canFly};
    this.heroes.push(hero);
  }


  reset(){
    this.heroes = [
      {
        name:'canFlyHero',canFly:true
      },
      {
        name:"cantFlying",canFly:false
      }
    ];
  }

}
