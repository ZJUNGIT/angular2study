"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var news_component_1 = require("./news.component");
var news_detail_component_1 = require("./components/detail/news-detail.component");
var newsRoutes = [
    { path: 'news', component: news_component_1.NewsComponent },
    { path: 'news/:id', component: news_detail_component_1.NewsDetailComponent }
];
var NewsRoutingModule = (function () {
    function NewsRoutingModule() {
    }
    return NewsRoutingModule;
}());
NewsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(newsRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], NewsRoutingModule);
exports.NewsRoutingModule = NewsRoutingModule;
//# sourceMappingURL=newsRouting.module.js.map