"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var wikipediaRouting_module_1 = require("./wikipediaRouting.module");
var wikipedia_component_1 = require("./wikipedia.component");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var WikipediaModule = (function () {
    function WikipediaModule() {
    }
    return WikipediaModule;
}());
WikipediaModule = __decorate([
    core_1.NgModule({
        imports: [
            wikipediaRouting_module_1.WikipediaRoutingModule,
            common_1.CommonModule,
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            wikipedia_component_1.WikipediaComponent
        ]
    })
], WikipediaModule);
exports.WikipediaModule = WikipediaModule;
//# sourceMappingURL=wikipedia.module.js.map