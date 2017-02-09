import { Injectable} from "@angular/core";

@Injectable()

export class LogHelper{
  constructor(){
    console.warn("Just from LogHelper class");
  }

}
