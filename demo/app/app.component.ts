import {Component,OnInit} from "@angular/core";
import { User } from "./class/User";
import { UserService } from "./services/user.service";
import { LogService } from "./services/log.service";
import { BetterLogger } from "./services/logger-better.service";
import { LoggerHelp } from "./services/logger-helper.service";


@Component({
    selector:"root-app",
    templateUrl:"app/app.component.html",
    styleUrls:["app/app.component.css"],
    providers:    [
      // LogService,
      [{provide: LogService, useClass: BetterLogger}],
      UserService
    ]
})

export class AppComponent implements OnInit {
    users:User[];
    constructor(private userService:UserService){}

    ngOnInit(){
      this.users = this.userService.getUsers();
    }


}
