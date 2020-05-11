//class
//重点：
//加入了protect,private,public声明，默认是public
//加入了abstract概念
class Person{
  private name:string
  constructor(name:string){
    this.name = name
  }
  static qcx:string='hello'
  static getInfo(){
    console.log(this.qcx)
  }
}
class H extends Person{
  constructor(name:string){
    super(name);
  }
}
//抽象类不可以实例化,抽象方法只能声明在抽象类中
abstract class Animal{
  abstract eat():any//abstract不能在声明时实现，只能在子类中实现
}
//抽象类的子类必须实现抽象类中的抽象方法
class Dog extends Animal{
  eat(){
    console.log('吃狗粮')
  }
}
export default {}