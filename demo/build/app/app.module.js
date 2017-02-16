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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var appRouting_module_1 = require("./appRouting.module");
var news_module_1 = require("./news/news.module");
var about_module_1 = require("./about/about.module");
var login_routing_module_1 = require("./login-routing.module");
var wikipedia_module_1 = require("./wikipedia/wikipedia.module");
var login_component_1 = require("./login.component");
// Imports for loading & configuring the in-memory web api
var angular2_in_memory_web_api_1 = require("angular2-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            appRouting_module_1.AppRoutingModule,
            news_module_1.NewsModule,
            about_module_1.AboutModule,
            wikipedia_module_1.WikipediaModule,
            // AdminModule,
            login_routing_module_1.LoginRoutingModule,
            angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService) //forRoot配置方法需要InMemoryDataService类实例，用来向内存数据库填充数据：
        ],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map