"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_data_mock_1 = require("../mock/user-data.mock");
var log_service_1 = require("./log.service");
//有时，我们需要动态创建这个依赖值，因为它所需要的信息直到最后一刻才能确定。 也许这个信息会在浏览器的会话中不停地变化。
//还假设这个可注入的服务没法通过独立的源访问此信息。
//这种情况下，请呼叫工厂提供商。
var UserService = (function () {
    function UserService(logger, isAuthorized) {
        this.logger = logger;
        this.isAuthorized = isAuthorized;
    }
    UserService.prototype.getUsers = function () {
        if (this.isAuthorized) {
            this.logger.log('get users');
            return user_data_mock_1.Users;
        }
        else {
            this.logger.log('not isAuthorized!');
            return [];
        }
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [log_service_1.LogService, Boolean])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map