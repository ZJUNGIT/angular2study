import { Users } from "../mock/user-data.mock";
import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
//@Injectable()标志着一个类可以被一个注入器实例化;
//通常来讲,在试图实例化一个没有被标识为@Injectable()的类时候,注入器将会报告错误.
//(1)面向未来,没有必要记得在后来添加了一个依赖的时候添加@Injectable().
//(2)一致性,所有的服务都遵循同样的规则,并且我们不需要考虑为什么少一个装饰器.

export class UserService{
  constructor(private logService:LogService){}
  getUsers(){
    this.logService.log("get users");
    return Users;
  }
}
