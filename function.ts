//参数定义
let f = function(name:string, age?:number) :void{

}
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