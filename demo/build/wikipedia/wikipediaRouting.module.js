"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var wikipedia_component_1 = require("./wikipedia.component");
var wikipediaRoutes = [
    { path: 'wikipedia', component: wikipedia_component_1.WikipediaComponent }
];
var WikipediaRoutingModule = (function () {
    function WikipediaRoutingModule() {
    }
    return WikipediaRoutingModule;
}());
WikipediaRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(wikipediaRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], WikipediaRoutingModule);
exports.WikipediaRoutingModule = WikipediaRoutingModule;
//# sourceMappingURL=wikipediaRouting.module.js.map