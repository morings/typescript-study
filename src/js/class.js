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
    //class
    //重点：
    //加入了protect,private,public声明，默认是public
    //加入了abstract概念
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.getInfo = function () {
            console.log(this.qcx);
        };
        Person.qcx = 'hello';
        return Person;
    }());
    var H = /** @class */ (function (_super) {
        __extends(H, _super);
        function H(name) {
            return _super.call(this, name) || this;
        }
        return H;
    }(Person));
    //抽象类不可以实例化,抽象方法只能声明在抽象类中
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    //抽象类的子类必须实现抽象类中的抽象方法
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.eat = function () {
            console.log('吃狗粮');
        };
        return Dog;
    }(Animal));
    exports.default = {};
});
