import {Component} from "@angular/core";
import { User } from "./classes/user";


@Component({
    selector:"root-app",
    templateUrl:"app/app.component.html",
    styleUrls:["app/app.component.css"]
})

export class AppComponent{
  user = new User("Jeason","This is password","sunjunjie8023@qq.com","beijing");

  get userInfo() {
      return JSON.stringify(this.user);
  }
}
