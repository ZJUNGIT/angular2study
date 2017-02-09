import {Component,OnInit} from "@angular/core";
import { User } from "./class/User";
import { UserService } from "./services/user.service";
import {Authorize} from "./services/authorize.service";
import { UserService2Provider } from "./services/userservice.provider";
import { LogService } from "./services/log.service";

@Component({
    selector:"root-app",
    templateUrl:"app/app.component.html",
    styleUrls:["app/app.component.css"],
    providers:    [
      LogService,
      Authorize, // 不可缺少
      {
          provide: UserService,
          useFactory: UserService2Provider,
          deps: [LogService, Authorize]
      }
    ]
})

export class AppComponent implements OnInit {
    users:User[];
    constructor(private userService:UserService){}

    ngOnInit(){
      this.users = this.userService.getUsers();
    }


}
