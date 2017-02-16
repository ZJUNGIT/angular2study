"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * 在这个管道的定义中体现了几个关键点：
 * 管道是一个带有管道元数据(pipe metadata)装饰器的类。
 * 这个管道类实现了PipeTransform接口的transform方法，该方法接受一个输入值和一些可选参数，并返回转换后的值。
 * 当每个输入值被传给transform方法时，还会带上另一个参数，比如我们这个管道中的exponent(放大指数)。
 * 我们通过@Pipe装饰器告诉Angular:这是一个管道。该装饰器是从Angular的core库中引入的。
 * 这个@Pipe装饰器允许我们定义管道的名字，这个名字会被用在模板表达式中。
 */
var ExponentPipe = (function () {
    //PipeTransform接口
    //transform方法是管道的基本要素，PipeTransform接口中定义了它，并用它指导各种工具和编译器。
    function ExponentPipe() {
    }
    ExponentPipe.prototype.transform = function (value, exponent) {
        var exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    };
    return ExponentPipe;
}());
ExponentPipe = __decorate([
    core_1.Pipe({
        name: "exponent"
    })
], ExponentPipe);
exports.ExponentPipe = ExponentPipe;
//# sourceMappingURL=exponential.pipe.js.map