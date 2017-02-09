import { Injectable } from "@angular/core";
import { LogHelper } from "./log-helper.service";

@Injectable()

export class BetterLogger{
  logs:string[]=[];

  constructor(private logHelper:LogHelper){
    console.warn("BetterLogger Constructor")
  }

  log(msg){
    this.logs.push(msg);
    console.warn("From better logger class ! ",msg);
  }

}
