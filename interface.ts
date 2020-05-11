//接口，意思就是声明一种约束规则
//属性类型接口,约束对象的属性名，属性值，必须要和声明时一致
interface Person{
  age:number;
  name;
  sex?:string ;
  [propName: string]:any;//任意属性
  readonly id: number;//只读属性也是确定属性，在对象变量定义的时候必须有值，此后不能修改
}
interface Q extends Person{
  hy:string
}
let a:Q = {
  id:1,
  age:25,
  name:'qcx',
  sex:'man',
  hy:'123'
  
}
//函数类型接口，对方法传入的参数以及返回值进行约束
interface Func {
  (param1: string, param2: number): boolean;
}
let myFunc: Func = function(param1, param2){
  return typeof param1 === "string" && typeof param2 === "number";
};
myFunc('12',12)
//索引接口（不常用）
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
//类接口，和抽象的概念很像,我觉得就可以当成一个属性接口，感觉两者没什么不同
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
//多接口
class Clock2  extends Clock implements ClockInterface,Person{
  age:number
  name
  id:1
}
//也可以当作一个属性接口
let m:ClockInterface = {
  currentTime:new Date(),
  setTime:(d)=>{}
}
//接口也可以继承类
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

export default {}//在文件尾export就没有问题，为了避免js文件同时加载的情况，typescript会禁止用相同变量名，除非将文件作为可导入的包