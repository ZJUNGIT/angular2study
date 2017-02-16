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
var wikipedia_service_1 = require("./services/wikipedia.service");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
var WikipediaComponent = (function () {
    function WikipediaComponent(wikipediaService) {
        var _this = this;
        this.wikipediaService = wikipediaService;
        this.title = "Wikipedia Demo ";
        this.fetches = "Fetches after each keystroke";
        //创建一个搜索关键字流,
        //组件创建searchTermStream为string类型的Subject。
        //search方法通过subject的next方法，将每个新搜索框的值添加到数据流中。
        this.searchTermStream = new Subject_1.Subject();
        this.items = this.searchTermStream //监听搜索关键字
            .debounceTime(300) //先等待用户停止输入至少300毫秒 (debounceTime)。
            .distinctUntilChanged() // 只有当搜索关键字变化的时候，才把它传给服务 (distinctUntilChanged)。
            .switchMap(function (term) { return _this.wikipediaService.search(term); });
    } //switchMap（以前叫flatMapLatest） 返回一个新的可观察对象，
    //它组合了所有这些“可观察的字符串数组”，重新按照它们的原始请求顺序进行排列，然后把最近的一个搜索结果交付给订阅者。
    WikipediaComponent.prototype.search = function (term) {
        this.searchTermStream.next(term);
    };
    return WikipediaComponent;
}());
WikipediaComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/wikipedia/wikipedia.component.html',
        providers: [wikipedia_service_1.WikipediaService]
    }),
    __metadata("design:paramtypes", [wikipedia_service_1.WikipediaService])
], WikipediaComponent);
exports.WikipediaComponent = WikipediaComponent;
//# sourceMappingURL=wikipedia.component.js.map