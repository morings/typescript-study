//装饰器：就是一个方法，可以注入到类，方法，属性参数上来扩展类，方法，参数的功能
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//装饰器写法：普通装饰器（无法传参）、装饰器工厂（可传参）
//类装饰器  在类声明之前被声明（紧靠类声明）。应用于类构造函数，可以用来监视，修改或替换类定义。 
/*普通装饰器
function logClass(param){
  param.protype.name = 'qcx'
}
@logClass
class HttpClient{
  
}
var h:any = new HttpClient();
h.name
*/
/*工厂模式
function logClass(name){
  return function(target){
    target.protype.name = name
  }
}
@logClass('qcx')
class HttpClient{
  
}
var h:any = new HttpClient();
h.name*/
/*类装饰器重载构造函数以及方法
function logClass(target){
  return class extends target{
    name:string='qcx'
  }
}
@logClass
class HttpClient{
  
}
var h:any = new HttpClient();
h.name*/
//属性装饰器 表达式会在运行时当做函数被调用传入2个参数 ：1对于静态资源来说是类的构造函数，对于实例成员是类的 原型对象 2成员的名字
function logClass(name) {
    return function (target, attr) {
        target[attr] = name;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    __decorate([
        logClass('qcx')
    ], HttpClient.prototype, "name", void 0);
    __decorate([
        logClass('man')
    ], HttpClient.prototype, "sex", void 0);
    return HttpClient;
}());
/*方法装饰器  应用到方法的属性描述上，可用来监视修改或者替换方法定义
//运行时传入下列3个参数
//1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
//2.成员的名字
//3.成员的属性描述符
function logClass(name:string){
  return (target:any,attr:any,describe:any)=>{
    describe.value = ()=>{
      console.log(name)
    }
  }
}
class HttpClient{
  @logClass('qcx')
  getData(){
    console.log(123)
  }
}
new HttpClient().getData()*/
/*//方法参数装饰器  （不常用）
//参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列3个参数
//1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
//2方法的名字
//3.参数在函数参数列表中的索引
function logClass(name:string){
  return (target:any,attr:any,index:any)=>{
    console.log(target)
  }
}
class HttpClient{
  getData(@logClass('qcx') name,@logClass('11') qge){
    console.log(123)
  }
}*/
/*四种装饰器执行顺序
属性 -->  方法 -->  方法参数（从后向前执行 2 -> 1 ）--> 类装饰器 （从后向前 2 -> 1）*/ 
