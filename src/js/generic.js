define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var g;
    (function (g) {
        //泛型，就是声明一种可定义的类型吧
        //第一种情况用在函数上
        function iteator(name) {
            return name;
        }
        iteator('123');
        var m = function (value) {
            return value;
        };
        m('11');
        //第二种是用在类上面
        var GenericNumber = /** @class */ (function () {
            function GenericNumber() {
            }
            return GenericNumber;
        }());
        var myGenericNumber = new GenericNumber();
        myGenericNumber.zeroValue = 0;
        myGenericNumber.add(1, 2);
        function loggingIdentity(arg) {
            console.log(arg.length); // Now we know it has a .length property, so no more error
            return arg;
        }
        loggingIdentity('123');
        //泛型类，声明一个类作为泛型
        var User = /** @class */ (function () {
            function User(name, age) {
                this.name = name;
                this.age = age;
            }
            return User;
        }());
        var user = new User('qcx', 11);
        var Person = /** @class */ (function () {
            function Person(user) {
                this.user = user;
            }
            return Person;
        }());
        var person = new Person(user);
        var IDBI = /** @class */ (function () {
            function IDBI() {
            }
            IDBI.prototype.add = function (value) {
                return value;
            };
            IDBI.prototype.update = function (value) {
                return value;
            };
            return IDBI;
        }());
        g.IDBI = IDBI;
    })(g = exports.g || (exports.g = {}));
    var db = new g.IDBI();
    db.add(1);
});
