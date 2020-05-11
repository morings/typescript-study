var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var a = {
        id: 1,
        age: 25,
        name: 'qcx',
        sex: 'man',
        hy: '123'
    };
    var myFunc = function (param1, param2) {
        return typeof param1 === "string" && typeof param2 === "number";
    };
    myFunc('12', 12);
    var myArr = ['first', 'second'];
    var myObj = {
        name: 'kkkk'
    };
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
        }
        Clock.prototype.setTime = function (d) {
            this.currentTime = d;
        };
        return Clock;
    }());
    //多接口
    var Clock2 = /** @class */ (function (_super) {
        __extends(Clock2, _super);
        function Clock2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Clock2;
    }(Clock));
    //也可以当作一个属性接口
    var m = {
        currentTime: new Date(),
        setTime: function (d) { }
    };
    //接口也可以继承类
    var Control = /** @class */ (function () {
        function Control() {
        }
        return Control;
    }());
    var Image = /** @class */ (function () {
        function Image() {
        }
        Image.prototype.select = function () {
            throw new Error("Method not implemented.");
        };
        return Image;
    }());
    exports.default = {}; //在文件尾export就没有问题，为了避免js文件同时加载的情况，typescript会禁止用相同变量名，除非将文件作为可导入的包
});
