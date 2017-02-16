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
var router_1 = require("@angular/router");
var news_service_1 = require("../../services/news.service");
require("rxjs/add/operator/switchMap");
var NewsDetailComponent = (function () {
    function NewsDetailComponent(route, newsService) {
        this.route = route;
        this.newsService = newsService;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.route.params.subscribe(params =>{
        //   this.newsService.getNewsById(+params.id).then(news =>{ this.news = news;})
        // });
        this.route.params.switchMap(function (params) { return _this.newsService.getNewsById(+params['id']); })
            .subscribe(function (news) { return _this.news = news; });
        ;
        //注意switchMap运算符如何将可观察的路由参数中的 id 映射到一个新的Observable， 即newsService.getHero方法的结果。
        //如果用户在 getNewsById 请求执行的过程中再次导航这个组件，
        //switchMap 再次调用newsService.getNewsById之前， 会取消之前的请求。
        // News的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
    };
    return NewsDetailComponent;
}());
NewsDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/news/components/detail/news-detail.component.html',
        styleUrls: ["app/news/components/detail/news-detail.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        news_service_1.NewsService])
], NewsDetailComponent);
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=news-detail.component.js.map