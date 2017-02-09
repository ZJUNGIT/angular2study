import {Injectable} from '@angular/core';
import {Users} from "../mock/user-data.mock";
import {LogService} from "./log.service";


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
