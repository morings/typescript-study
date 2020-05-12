ts是以一一种规范来写js
**ts中数据类型**
sring
number
boolean
undefind
null
Array
**数组的声明方式**
```
let d:number[]=[1]
let e:Array<number>=[1]
let f:[number,string]=[1,'1']
```
any:任意类型
enum:枚举类型
同名的枚举是在之前的基础上开始的，所以不能有同名属性
首先枚举的类型分为数字类型和字符类型以及异构(混入)三大类
**数字枚举**
1会生成反向映射表
2不初始化的值默认为上个值+1，第一个没初始化的值为0
3NaN和Infinity 不能作为枚举的值
4枚举成员来源：计算的和常量成员
5与字符枚举混用时不能使用计算值
```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
**字符枚举**
1字符串枚举需使用字符串字面量或者之前定义的字符串枚举成员来初始化
2字符串枚举不会生成反向映射

```
enum StrEnum1 {
  one = 'one',
  two = 'two'
}
```
void：表示函数没有返回值,
object:声明js中的复杂类型
**ts中的函数**
  参数定义
  函数重载
```
//参数定义
let f = function(name:string, age?:number) :void{

}
```
函数重载
```
//函数重载
function getInfo(name:string):string;
function getInfo(age:number):string;
 
//下面是getInfo函数的实现
function getInfo(s:any):any{
    if(typeof s==='string'){
        return '我叫:'+s;
    }else{
        return '我的年龄是'+s;
    }
}
 
 console.log(getInfo('张三'));   //正确
 console.log(getInfo(20));   //正确
```

**ts中的类**
加入了protect,private,public声明，默认是public
加入了abstract概念，抽象类不能被实例化，抽象方法只能声明在抽象类中，且实现时不能实现，必须在继承类中实现
**ts中的接口**
属性接口：限定对象中有哪些属性

```
interface Person{
  age:number;
  name;
  sex?:string ;
  [propName: string]:any;//任意属性
  readonly id: number;//只读属性也是确定属性，在对象变量定义的时候必须有值，此后不能修改
}
let a:Q = {
  id:1,
  age:25,
  name:'qcx',
  sex:'man',
  hy:'123'  
}
```
函数类型接口：对方法传入的参数以及返回值进行约束，参数名不需要一致

```
interface Func {
  (param1: string, param2: number): boolean;
}
let myFunc: Func = function(name, param2){
  return typeof name=== "string" && typeof param2 === "number";
};
```
//索引接口（不常用）

```
interface ArrIndex {
  [index:number]: string
}
interface Obj{
　　[index:string]:string
}
let myArr: ArrIndex = ['first','second']
let myObj:Obj = {
　　name: 'kkkk'
}
```
类接口，和抽象的概念很像,我觉得就可以当成一个属性接口，感觉两者没什么不同

```
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}
class Clock {
  currentTime;
  setTime(d) {
      this.currentTime = d;
  }
  constructor(h,m) { }
}
```
也可以当作一个属性接口

```
let m:ClockInterface = {
  currentTime:new Date(),
  setTime:(d)=>{}
}
```
接口也可以继承类

```
class Control {
   state: any;
}

interface SelectableControl extends Control {
  select():void;
}
class Image implements SelectableControl {
  select(): void {
    throw new Error("Method not implemented.");
  }  
  state:any
}
```
**泛型**
定义一种不确定类型，配合函数，接口，类在使用或实例化时在确定类型
**装饰器：就是一个方法，可以注入到类，类方法，类属性参数上来扩展类，方法，参数的功能**
类装饰器：有两种写法
1普通装饰器（不传参数）
那么参数就是类的原型属性
```
function logClass(param){
  param.protype.name = 'qcx'
}
@logClass
class HttpClient{
  
}
```
2工厂模式（传递参数）

```
function logClass(name){
  return function(target){
    target.protype.name = name
  }
}
@logClass('qcx')
class HttpClient{
  
}
```

**属性装饰器 表达式会在运行时当做函数被调用传入2个参数 ：1对于静态资源来说是类的构造函数，对于实例成员是类的 原型对象 2成员的名字**

```
function logClass(name:string){
  return (target:any,attr:any)=>{
    target[attr] = name
  }
}
class HttpClient{
  @logClass('qcx')
  name:string|undefined
  @logClass('man')
  sex:string|undefined
}
```
方法装饰器  应用到方法的属性描述上，可用来监视修改或者替换方法定义
运行时传入下列3个参数
1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
2.成员的名字
3.成员的属性描述符

```
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
```
方法参数装饰器  （不常用）
参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列3个参数
1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
2方法的名字
3.参数在函数参数列表中的索引

```
function logClass(name:string){
  return (target:any,attr:any,index:any)=>{
    console.log(target)
  }
}
class HttpClient{ 
  getData(@logClass('qcx') name,@logClass('11') qge){
    console.log(123)
  }
}
```
**四种装饰器执行顺序
属性 -->  方法 -->  方法参数（从后向前执行 2 -> 1 ）--> 类装饰器 （从后向前 2 -> 1）**