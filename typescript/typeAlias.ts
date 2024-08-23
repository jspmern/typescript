type carName=string;
type carModel=string;
type carNO=number
let carName1:carName='bmw'
let carNO1:carNO=123
let carModel1:carModel='sport'

type car={
    name:carName,
    model:carModel,
    no:carNO,
    doe?:string,
    challan:boolean,
    isSell?:boolean
}

type sportCar={
    speed:number,
    price:number
}
let carDetails:car={
    name:'bmw',
    model:'x-4',
    no:123,
    challan:false,
    isSell:true
}

//even you can use union and intersection(union means one else another, intersection means both) (for more check seprate chepter)
let carDetails2:car | sportCar ={
    speed:300,
    price:30000
}

let carDetails3:car & sportCar={
    name:'bmw',
    model:'x-4',
    no:123,
    challan:false,
    isSell:true,
    speed:3333,
    price:3333333
}
