import {Injectable } from "@angular/core";
import { LoggerHelp } from "./logger-helper.service";
@Injectable()

export class BetterLogger{
  logs:string[] = [];

  log(msg){
    this.logs.push(msg);
    console.warn("From better logger class:",msg);
  }

}
