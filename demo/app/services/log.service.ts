import { Injectable } from "@angular/core";

@Injectable()

export class LogService{
  logs:string[]=[];

  log(msg){
    this.logs.push(msg);
    console.warn('From logger class: ' + msg);
  }
}
