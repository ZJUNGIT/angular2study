import {Injectable } from "@angular/core";
import {
          CanActivate,
          Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot
        }               from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable()

export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){}

  //ActivatedRouteSnapshot包含了即将被激活的路由，而RouterStateSnapshot包含了该应用即将到达的状态。
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    let url:string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url:string):boolean{
    if(this.authService.isLoggedIn){return true;}

    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }
}
