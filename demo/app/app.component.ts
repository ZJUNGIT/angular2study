import {Component,OnChanges} from "@angular/core";
import { User } from "./classes/user";

@Component({
    selector:"root-app",
    templateUrl:"app/app.component.html",
    styleUrls:["app/app.component.css"]
})

export class AppComponent implements OnChanges{
  active = true;

  user:any;

  constructor() {
       this.user = {
           username: 'Jeason',
           password: "This is password",
           email:"sunjja@jiedaibao.com",
           region:{
             city: '北京',
             street: '仰山公园'
           }
       };
   }
  regionList = {
    citys:["上海","广州","深圳","北京"],
    street:["望京","中关村","仰山公园"]
  }
  get userInfo() {
      return JSON.stringify(this.user);
  }

  onSubmit(myForm){
    console.log(myForm);
    console.log(myForm.value);
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
