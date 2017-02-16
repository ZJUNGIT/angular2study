"use strict";
var user_service_1 = require("./user.service");
exports.UserService2Provider = function (logger, authorize) {
    return new user_service_1.UserService(logger, authorize.getIsAuthorized());
};
//# sourceMappingURL=userservice.provider.js.map