interface CarDetils{
    name:string;
    model:string;
    no?:number
}
interface CarDetails2  {
        speed:number
    }

//it just like inheritance
// interface CarDetails2 extends CarDetils{
//     speed:number
// }

// let car6:CarDetails2 ={
//     name:'abc',
//     model:'pqr',
//     speed:123
// }
let car5:CarDetils;
car5={
    name:"aluto",
    model:'lx',
     
}



//even you can use union and intersection
//union
let demo : CarDetils | CarDetails2;
//intersection
let demo2:CarDetils & CarDetails2;
demo2={
  speed:1233,
  name:'abc',
  model:'xyx'   
}

demo={
    speed:3000
}
