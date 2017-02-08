import {Component} from "@angular/core";
import { User } from "./classes/user";

@Component({
    selector:"root-app",
    templateUrl:"app/app.component.html",
    styleUrls:["app/app.component.css"]
})

export class AppComponent{
  active = true;

  user = new User("Jeason","This is password","sunjunjie8023@qq.com","beijing");
  regionList = [
    {
      name:'beijing',
      label:'北京'
    },
    {
      name:"shanghai",
      label:"上海"
    },
    {
      name:"guangzhou",
      label:"广州"
    },
    {
      name:"shenzhen",
      label:"深圳"
    }
  ];
  get userInfo() {
      return JSON.stringify(this.user);
  }

  onSubmit(myForm){
    console.log(myForm);
  }

  /**
   * 清空数据，这时候那些验证错误就会被检测到
   */
  reset(myForm){
    this.user = {};
  }

  reset(myForm){
    myForm.reset();
    return false;
  }

  reset(myForm){
    this.user = {};
    this.active = false;
    setTimeout(() => this.active =true,0);
    return false;
  }

}
