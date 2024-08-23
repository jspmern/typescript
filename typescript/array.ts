let result=[]  //bydefault it is any
//1.st way
let result1:number[]=[2,3,4,5,6,7]
// result1.push('utsav')  //string you can not push because type is number
result1.push(2)
console.log(result1)

//2.ways genric ways
let resutl2:Array<string>
resutl2=['utsav','aman','vijaya']
console.log(resutl2)

//array method (by using array genric)
let res:Array<string>=resutl2.map((item:string):string=>{
      return `${item}+${Math.random()}`
})
console.log('result',res)

//array method (by using array genric)
let res1:string[]=resutl2.map((item:string):string=>{
    return `${item}+${Math.random()}`
})
console.log('result',res1)
