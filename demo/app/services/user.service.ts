import {Injectable} from '@angular/core';
import {Users} from "../mock/user-data.mock";
import {LogService} from "./log.service";

//有时，我们需要动态创建这个依赖值，因为它所需要的信息直到最后一刻才能确定。 也许这个信息会在浏览器的会话中不停地变化。
//还假设这个可注入的服务没法通过独立的源访问此信息。
//这种情况下，请呼叫工厂提供商。

@Injectable()
export class UserService {
    isAuthorized: boolean;
    constructor(private logger: LogService, isAuthorized: boolean) {
        this.isAuthorized = isAuthorized;
    }

    getUsers() {
        if(this.isAuthorized){
            this.logger.log('get users');
            return Users;
        }
        else {
            this.logger.log('not isAuthorized!');
            return [];
        }
    }
}
