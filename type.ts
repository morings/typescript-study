//ts类型讲解
namespace A{
  let a:boolean=true
  let b:number=123
  let c:string='hello'
  let d:number[]=[1]
  let e:Array<number>=[1]
  let f:[number,string]=[1,'1']
 
  enum j{success='success'+'fail',error=10}
  enum j {fail}
  console.log(j)
  let h:null = null
  let m:undefined = undefined
  function i():void {
    console.log(this)
  }
  let o:any=1;
  o='hello'
  function getInfo(name:string):number;
  function getInfo(name:number):number;
  function getInfo(name:any):any{
    if(false){
      return 1
    }else{
      return '123'
    }
  }
}
//断言，通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”
/*方式一
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;*/
/*
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;*/
//object表示非原始类型
declare function create(o: object): void;
create({ prop: 0 }); // OK
let m:{readonly name:string} = {name:'qcx'}
interface SquareConfig {
  color?: string;
  width?: number;
}





