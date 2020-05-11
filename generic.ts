export namespace g{
//泛型，就是声明一种可定义的类型吧
//第一种情况用在函数上
function iteator<T>(name:T):T{
  return name
}
iteator('123')
//也可以搭配interface使用
interface B<T>{
  (value:T):T
}
var m:B<string> = function(value){
  return value
}
m('11')
//第二种是用在类上面
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add(1,2)
//泛型约束
//你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 在
// loggingIdentity例子中，我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以就报错了。
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
loggingIdentity('123')
//泛型类，声明一个类作为泛型
class User{
  name:string
  age:number
  constructor(name: string,age: number){
    this.name = name;
    this.age = age
  }
}
let user = new User('qcx',11);
class Person<T>{
  user:T
  constructor(user:T){
    this.user = user
  }
}
let person = new Person<User>(user)
//也可以通过泛型接口与泛型类混用
interface IDB<T>{
  add(value:T):T
}
export class IDBI<T> implements IDB<T>{
  add(value: T): T {
    return value
  }
  update(value:T):T{
    return value
  }
}
}
let db = new g.IDBI<number>()
db.add(1)
