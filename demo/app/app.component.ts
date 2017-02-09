import {Component,OnInit} from "@angular/core";
import { User } from "./class/User";
import { UserService } from "./services/user.service";
import { LogService } from "./services/log.service";


@Component({
    selector:"root-app",
    templateUrl:"app/app.component.html",
    styleUrls:["app/app.component.css"],
    providers:    [
      LogService,
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
