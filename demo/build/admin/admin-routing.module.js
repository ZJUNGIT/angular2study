"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_component_1 = require("./admin.component");
var manage_new_component_1 = require("./manage-new.component");
var manage_about_component_1 = require("./manage-about.component");
var adminDashboard_component_1 = require("./adminDashboard.component");
var auth_guard_service_1 = require("../auth-guard.service");
var adminRoutes = [
    {
        path: "",
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                //虽然我们希望对admin路径下的危机中心管理类路由进行分组，但并不需要另一个仅用来分组路由的组件。 这同时也允许我们守卫子路由。
                children: [
                    { path: 'news', component: manage_new_component_1.ManageNewsComponent },
                    { path: 'heroes', component: manage_about_component_1.ManageAboutComponent },
                    { path: '', component: adminDashboard_component_1.AdminDashboardComponent }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(adminRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AdminRoutingModule);
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=admin-routing.module.js.map