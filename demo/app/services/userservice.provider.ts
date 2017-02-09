import {LogService} from "./log.service";
import {Authorize} from "./authorize.service";
import {UserService} from "./user.service";

export let UserService2Provider = (logger: LogService, authorize: Authorize) => {
    return new UserService(logger, authorize.getIsAuthorized());
};
