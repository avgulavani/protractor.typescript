
// let handles sync and print value from 1 to 5
// var doesn't handle it so it print 5 for entire loop
for(let i=0;i<5;i++){

    setTimeout(function() {console.log(i);},100*i);
}

//  typescript there is strong type check not same as var. var-doesn't care about return type
const a=4;
let b="hello";
let c:number=4;                   // numeber is return type here
let list:Array<number>=[1,2,3];  //  let scope, Array<number> return type
let dynamic:any                 //   any return type is accepted
let v:boolean=false            //    return type is boolean