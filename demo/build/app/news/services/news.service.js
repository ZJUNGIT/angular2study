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
var http_1 = require("@angular/http");
require("rxjs/add/observable/throw");
// Operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.newsUrl = "app/newslist";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    NewsService.prototype.getNewsList = function () {
        // return Promise.resolve(NewsList);
        // return this.http.get(this.newsUrl)
        //          .toPromise()
        //          .then(response => response.json().data)
        //          .catch(this.handleError);
        //
        return this.http.get(this.newsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    NewsService.prototype.extractData = function (res) {
        var body = res.json(); //可以把Response解析成Javascript对象 --- 只要调用一下response.json()就可以，
        return body.data || {};
    };
    NewsService.prototype.update = function (news) {
        var url = this.newsUrl + "/" + news.id;
        return this.http
            .put(url, JSON.stringify(news), { headers: this.headers })
            .toPromise()
            .then(function () { return news; })
            .catch(this.handleError);
    };
    NewsService.prototype.getNewsById = function (id) {
        return this.getNewsList()
            .then(function (newslist) { return newslist.find(function (news) { return news.id === id; }); });
    };
    NewsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return NewsService;
}());
NewsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map