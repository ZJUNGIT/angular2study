import {Component,OnInit } from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector:"root-app",
    templateUrl:"app/app.component.html",
    styleUrls:["app/app.component.css"]
})

export class AppComponent {
  constructor(private router:Router){}

  goToSet(){
    this.router.navigate(['/news', 1]);
  }

}
