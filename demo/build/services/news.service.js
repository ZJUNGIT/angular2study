"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var newslist_mock_1 = require("../mock/newslist.mock");
var NewsService = (function () {
    function NewsService() {
    }
    NewsService.prototype.getNewsList = function () {
        return Promise.resolve(newslist_mock_1.NewsList);
    };
    NewsService.prototype.getNewsById = function (id) {
        console.log(id, "====");
        return this.getNewsList()
            .then(function (newslist) { return newslist.find(function (news) { return news.id === id; }); });
    };
    return NewsService;
}());
NewsService = __decorate([
    core_1.Injectable()
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map