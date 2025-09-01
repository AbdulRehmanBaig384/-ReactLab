// // // console.log('Hello World',String)
// // let names:string="Abdul Rehman";
// // let age=22;
// import { number } from "motion"
// // function greet(username:string,age:Number):any{
// //     return `Hello ${username} and you  are ${age} old`; 
// // }
// // let data:string=greet(names,age);
// // console.log(data)
// // let scores:number[]=[10,20,30,40]
// // console.log(scores)
// // let value:string |number;
// // value=23;
// // value='bilal'
// // console.log(value)
// type car={
// name:string,
// model:string,
// }
// function information(p:car):string{
//   return `HI ${p.name} and model of your car is ${p.model}`
// }
// let data=information({name:'Toyota GrandX',model:'@#X1'})
// console.log(data)
// // let value:string |number;
// // value=23;
// // value='bilal'
// // console.log(value)
// let num1:number[]=[1,2,3,4]
// interface user{
//   name:string,
//   age:number,
//   gender?:string
// }
// function info(obj:user){
//   obj.age=12
// }
// class device{
//   constructor(public name:string, public age:number){
//          console.log(`hello ${name} and your age is ${age}`)}
// }
// let d1=new device("ali",31);
// class abc{
//   constructor(public name:string){}
// }
// class edc extends abc{
//   constructor( name:string){
//     super(name)
//   }
//   getvalue(){
//     console.log(this.name)
//   }
// }
// let b1=new edc('abdulrehan')
// b1.getvalue()
// function sum(...arr:number[])
// {
// }
// sum(1,2,3,4,5,6,7,8,9)
// function arr<t>(a:t){
//  console.log(a)
// }
// arr<string>('hello')
// arr<number>(12)
var abc = /** @class */ (function () {
    function abc(key) {
        this.key = key;
    }
    return abc;
}());
var b1 = new abc('hello You are the handsome boy i have ever seen in my life');
var b2 = new abc(23);
console.log(b1);
console.log(b2);
