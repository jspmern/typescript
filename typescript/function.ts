//example one for function with argument with return type
// function demo3 (no:number,no1:number): void
// {
//    console.log(no+no1)
// }
// demo3(25,24)
// demo3(23, 24);

//function with return type
// function demo4(no:number,no1:number):number[]{
//     return [no+no1]
// }
// console.log(demo4(4,6)) 

//function   with complex return type
// interface D{name:string,add:string}
// interface E extends D {age:number}
// function demo5(details:D,age:number) :E
// {
//    return {...details,age:age}
// }
// console.log(demo5({name:'utsav',add:'delhi'},6))


// function demo6(details:D,age?:number)
// {
//    return {...details,age:age}
// }
// demo6({name:'utsav',add:'delhi'})



//callback

// function print(data:string){
//     console.log(data)
// }

// function more(arg1:string,arg2:string,cb:(data:string)=>void)
// {
//    cb(`${arg1} ${arg2} `)
// }
//  more('utsav','apoorve',print)

          //or
type cbFunc=(data:string)=>void
function print(data:string){
    console.log(data)
}

function more(arg1:string,arg2:string,cb:cbFunc)
{
   cb(`${arg1} ${arg2} `)
}
 more('utsav','apoorve',print)