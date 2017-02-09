import {Component,OnInit,Inject} from "@angular/core";
import {APP_CONFIG,HERO_DI_CONFIG} from "./services/app-config.service";


@Component({
    selector:"root-app",
    templateUrl:"app/app.component.html",
    styleUrls:["app/app.component.css"],
    providers:    [
      {provide:APP_CONFIG,useValue:HERO_DI_CONFIG}
    ]
})

export class AppComponent implements OnInit {

  constructor(@Inject(APP_CONFIG) private config:APP_CONFIG){
  }

  ngOnInit(){
    this.title=this.config.title;
  }


}
