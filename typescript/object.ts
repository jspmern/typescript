
let obj:{name:string,age:number}={name:'utsavs',age:8}
//if some of key is missing in that time you are getting error for that one you can create optional (?)
let obj2:{name:string,age:number,add?:string}={name:'utsav',age:23}  //here add become optional

let res3:Array<string>=Object.keys(obj2)
console.log(res3)

//but in this all cases you can say we have unreadable code if you have more keys than it is become very defcult task.

// (you will get more idea about type checpter)
type bio={
    name:string,
    age:number,
    address?:string
}

//there is another way to also interface (you will get more idea in inerface checpter.)
interface Details{
    name:string,
    add?:string,
    roll:number
}
let obj3:bio;
let obj4:bio={name:"utsav",address:'delhi',age:23}
console.log(obj4.name,obj4.address,obj4.age)
let obj5:Details;
obj5={name:"utsav",roll:34}