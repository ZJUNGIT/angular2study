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
var news_search_service_1 = require("../news/services/news-search.service");
var subject_1 = require("rxjs/subject");
var AboutComponent = (function () {
    //Subject（主题）是一个可观察的事件流中的生产者。 searchTerms生成一个产生字符串的Observable，用作按名称搜索时的过滤条件。
    //每当调用search时都会调用next来把新的字符串放进该主题的可观察流中。
    function AboutComponent(newsSearch) {
        this.newsSearch = newsSearch;
        this.searchTerms = new subject_1.Subject();
    }
    // Push a search term into the observable stream.
    AboutComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    AboutComponent.prototype.ngOnInit = function () { };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        templateUrl: "app/about/about.component.html"
    }),
    __metadata("design:paramtypes", [news_search_service_1.NewsSearchService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map