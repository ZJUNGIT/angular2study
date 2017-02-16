import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
  name:'flyingHeroes',
  pure:true
})

export class FlyingHeroesPipe implements PipeTransform{
  transform(allHeroes:[]){
    return allHeroes.filter(hero => hero.canFly);
  }
}
