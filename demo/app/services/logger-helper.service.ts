import { Injectable } from "@angular/core";

@Injectable()

export class LoggerHelp{
  constructor(){
    console.warn('Just a logger helper!');
  }
}
